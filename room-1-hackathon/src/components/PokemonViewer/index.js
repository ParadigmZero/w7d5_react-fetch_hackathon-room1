import React, { useEffect } from "react";
import StatsTable from "../StatsTable/index";

//`https://pokeapi.co/api/v2/pokemon/${id}`
function PokemonViewer({ id, pokemon, setPokemon }) {
  // UseEffect
  useEffect(() => {
    async function getPokemon() {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        headers: { accept: "application/json" },
      });
      let data = await response.json();
      setPokemon(data);

      // console.log(pokemon);
    }
    getPokemon();
  }, [id]);

  console.log(pokemon.stats && pokemon.stats[0].base_stat);
  console.log(pokemon);
  return (
    <div className="pokemon-viewer">
      <p>{pokemon.name}!</p>

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
