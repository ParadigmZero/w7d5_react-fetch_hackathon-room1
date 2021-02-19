import React, { useState, useReducer } from "react";
import PokemonController from "../PokemonController";
import PokemonViewer from "../PokemonViewer";

const initialState = { id: 1 };
function reducer(state, action) {
  switch (action.type) {
    case "searchById":
      if (state.id > 1 && state.id < 150) {
        setId(state.id);
      }
    case "randomSearch":
      setId(Math.floor(Math.random() * 151) + 1);
    default:
      return state;
  }
}

function App() {
  const [id, setId] = useState(Math.floor(Math.random() * 151) + 1);
  const [pokemon, setPokemon] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [text, setText] = useState("");

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

  return (
    <div className="App">
      <PokemonViewer id={id} pokemon={pokemon} setPokemon={setPokemon} />
      <PokemonController
        reducer={reducer}
        text={text}
        updateText={updateText}
        searchByIdClick={searchByIdClick}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
