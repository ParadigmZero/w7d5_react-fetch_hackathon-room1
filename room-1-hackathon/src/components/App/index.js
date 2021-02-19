import React, { useState } from "react";
import PokemonController from "../PokemonController";
import PokemonViewer from "../PokemonViewer";

function App() {

  const [id, setId] = useState(Math.floor(Math.random() * 151) + 1);
  const [pokemon, setPokemon] = useState("");

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    setId(Math.floor(Math.random() * 151) + 1);
  }

  return (
    <div className="App">
      <PokemonViewer id={id} pokemon={pokemon} setPokemon={setPokemon} />
      <PokemonController  handleClick={handleClick}/>
    </div>
  );
}

export default App;
