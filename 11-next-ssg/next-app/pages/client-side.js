import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
const headers = {
  "Cache-Control": "no-cache",
};

function HomePage(props) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const { data } = await axios.get(url, { headers });

      const promises = data.results.map((result) => {
        return axios.get(result.url, { headers });
      });

      const results = await Promise.all(promises);

      const pokeData = results.map((r) => ({
        name: r.data.name,
        imageUrl: r.data.sprites.front_default,
      }));

      setPokemon(pokeData);
    };

    fetchPokemon();
  }, []);

  return pokemon.length > 0 ? (
    <div>
      {pokemon.map((poke) => (
        <div key={poke.name}>
          <img src={poke.imageUrl} />
          <p>{poke.name}</p>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default HomePage;
