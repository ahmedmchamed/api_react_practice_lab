import React from 'react';
import PokemonDetail from './PokemonDetail';

const PokemonSelector = (props) => {
    const pokemonOptions = props.pokemon.map((pokemon) => {
        return <option value={pokemon.name}>{pokemon.name}</option>;
    })

    function handleChange(event) {
        props.onPokemonSelected(event.target.value);
    }

    return (
        <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
            <option disabled value="default">Choose a pokemon...</option>
            {pokemonOptions};
        </select>
    )
}

export default PokemonSelector;