import React from "react";

function PokemonController({handleClick, text, updateText, searchByIdClick}) {


return(
<div>
    <div>
    <button onClick={handleClick}>Get Random Pokemon</button>
    </div>
    <div>
    <input onChange={(event) => {updateText(event)}} />
    <button onClick={searchByIdClick}>Search by id</button>
    </div>
</div>
)


}

export default PokemonController;
