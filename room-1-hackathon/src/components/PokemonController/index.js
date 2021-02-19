import React from "react";

function PokemonController({ reducer, text, updateText, searchById }) {
  return (
    <div>
      <div>
        <button onClick={reducer({ type: "randomSearch" })}>
          Get Random Pokemon
        </button>
      </div>

      <div>
        <input
          onChange={(event) => {
            updateText(event);
          }}
        />
        <button onClick={reducer({ type: "searchById" })}>Search by id</button>
      </div>
    </div>
  );
}

export default PokemonController;
