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
                   < img src={pokemon.sprites?.front_default} alt="front" />
                   < img src={pokemon.sprites?.back_default} alt='back' />
            </div>
            
            <table id="playerTable">
                    <tr>
                        <td>HP</td>
                        <td id="playerHp"> {pokemon.stats && pokemon.stats[0].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td id="playerAttack"> {pokemon.stats && pokemon.stats[1].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td id="playerDefense"> {pokemon.stats && pokemon.stats[2].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Special Attack</td>
                        <td id="playerSpecialAttack"> {pokemon.stats && pokemon.stats[3].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Special Defense</td>
                        <td id="playerSpecialDefense"> {pokemon.stats && pokemon.stats[4].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td id="playerSpeed"> {pokemon.stats && pokemon.stats[5].base_stat}</td>
                    </tr>
                </table>

        </div>
    );
}

export default PokemonViewer;
