import React, { useEffect } from "react";
import StatsTable from "../StatsTable/index";
import useDocumentTitle from "../../hooks/useDocumentTitle";

//`https://pokeapi.co/api/v2/pokemon/${id}`
function PokemonViewer({ id, pokemon, setPokemon }) {
  // UseEffect
  useEffect(() => {
    async function getPokemon() {
      let response = await fetch(`${process.env.REACT_APP_POKEMON_URL}${id}`, {
        headers: { accept: "application/json" },
      });
      let data = await response.json();
      setPokemon(data);
    }
    getPokemon();
  }, [id]);

  useDocumentTitle(`Pokemon World - ${pokemon.name?.toUpperCase()}`);

  return (
    <div className="container">
      <p>{pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}!</p>

      <div>
        <img src={pokemon.sprites?.front_default} alt="front" />
        <img src={pokemon.sprites?.back_default} alt="back" />
      </div>
      <div>
        <StatsTable stats={pokemon.stats} />
      </div>
    </div>
  );
}

export default PokemonViewer;
