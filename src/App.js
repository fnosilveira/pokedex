import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 50
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.cont / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
