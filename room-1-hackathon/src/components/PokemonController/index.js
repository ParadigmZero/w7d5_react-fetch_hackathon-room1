import React from "react";

function PokemonController({ dispatch, updateText }) {
  return (
    <div>
      <div>
        <button onClick={() => dispatch({ type: "randomSearch" })}>
          Get Random Pokemon
        </button>
      </div>

      <div>
        <input
          onChange={(event) => {
            updateText(event);
          }}
        />
        <button onClick={() => dispatch({ type: "searchById" })}>Search by id</button>
      </div>
    </div>
  );
}

export default PokemonController;
