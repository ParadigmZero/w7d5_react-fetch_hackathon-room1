import React from "react";

function PokemonController({ handleClick, updateText, searchByIdClick }) {
  return (
    <div>
      <div>
        <button data-testid="button" onClick={handleClick}>Get Random Pokemon</button>
      </div>
      <div>
        <input
          type="number"
          placeholder="Enter 1-500"
          min={1}
          max={500}
          //   minlength="1"
          //   maxlength="3"
          //   pattern="[1-5][0-9]?[0-9]?"
          onChange={(event) => {
            updateText(event);
          }}
        />

        <button onClick={searchByIdClick}>Search by id</button>
      </div>
    </div>
  );
}

export default PokemonController;
