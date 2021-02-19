import React, { useState } from "react";
import PokemonController from "../PokemonController";
import PokemonViewer from "../PokemonViewer";

function App() {
  const [id, setId] = useState(Math.floor(Math.random() * 151) + 1);
  const [pokemon, setPokemon] = useState("");

  const [text, setText] = useState("");

  function updateText(event) {
    setText(event.target.value);
  }

  function searchByIdClick() {
    if (text > 1 && text < 150) {
      setId(text);
    }
  }

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151
    setId(Math.floor(Math.random() * 151) + 1);
  }
  //s

  return (
    <div className="App">
      <PokemonViewer id={id} pokemon={pokemon} setPokemon={setPokemon} />
      <PokemonController
        text={text}
        updateText={updateText}
        searchByIdClick={searchByIdClick}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
