import React, { useEffect } from "react";


//`https://pokeapi.co/api/v2/pokemon/${id}`
function PokemonViewer({ id, pokemon, setPokemon }) {

    // UseEffect
    useEffect(() => {
        async function getPokemon() {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,
                { headers: { accept: "application/json" } }
            );
            let data = await response.json();
            setPokemon(data);
            console.log(process.env.REACT_APP_API_URL);
            console.log(pokemon);
        }
        getPokemon();
    }, [id]);

    return (
        <div className="pokemon-viewer">
            <p>{pokemon.name}!</p>
            <p>{pokemon.height}!</p>
            < img src={pokemon.sprites?.front_default} alt="front" />
            < img src={pokemon.sprites?.back_default} alt='back' />
            <ul>

            </ul>

        </div>
    );
}

export default PokemonViewer;
