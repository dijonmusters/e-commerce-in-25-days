import { useState, useEffect } from "react";
import axios from "axios";

const Poke = ({ poke }) => {
  const [posY, setPosY] = useState(-100);

  useEffect(() => {
    setTimeout(() => {
      setPosY(window.innerHeight);
      console.log("moving");
    }, 100);
  }, []);

  return (
    <img
      style={{
        ...styles,
        transform: `translate3d(${poke.startingX}px, ${posY}px, 0)`,
      }}
      src={poke.url}
    />
  );
};
const Pokemon = ({ pokemon }) => {
  return pokemon.map((poke, i) => <Poke key={i} poke={poke} />);
};

const styles = {
  position: "fixed",
  top: 0,
  left: 0,
  transition: "transform 2s ease-in",
};

const getPokemon = (pokedex) =>
  pokedex[Math.floor(Math.random() * pokedex.length)];

const getRandomStartX = () => Math.floor(Math.random() * window.innerWidth);

export const usePokemon = () => {
  const [fallingPokemon, setFallingPokemon] = useState([]);

  const addFallingPokemon = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=151"
    );

    const pokemon = getPokemon(data.results);

    const { data: pokeInfo } = await axios.get(pokemon.url);

    setFallingPokemon((current) => [
      ...current,
      {
        url: pokeInfo.sprites.front_default,
        startingX: getRandomStartX(),
      },
    ]);
  };

  return {
    pokemon: fallingPokemon,
    addPokemon: addFallingPokemon,
  };
};

export default Pokemon;
