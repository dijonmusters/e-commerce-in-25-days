import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
const headers = {
  "Cache-Control": "no-cache",
};

function HomePage({ pokemon }) {
  return pokemon.length > 0 ? (
    <div>
      {pokemon.map((poke) => (
        <div key={poke.name}>
          <p>{poke.name}</p>
          <p>
            Height: {poke.height} | Weight: {poke.weight}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get(url, { headers });

  const promises = data.results.map((result) => {
    return axios.get(result.url, { headers });
  });

  const results = await Promise.all(promises);

  const pokeData = results.map((r) => ({
    name: r.data.name,
    height: r.data.height,
    weight: r.data.weight,
  }));

  console.log(results);

  return {
    props: {
      pokemon: pokeData,
    },
  };
};

export default HomePage;
