import React from 'react';
import PokemonAbilitiesList from './PokemonAbilitiesList';
import PokemonMovesList from './PokemonMovesList';

const PokemonDetail = (props) => {
        const abilities = props.selectedPokemon.abilities.map((ability, index) => {
            return <PokemonAbilitiesList key={index} abilityName={ability.ability.name}/>
        })

        const moves = props.selectedPokemon.moves.map((move, index) => {
            return <PokemonMovesList key={index} moveName={move.move.name} />
        })

        let displayName;
        if (props.pokemonName) {
            displayName = <p>Name: {props.pokemonName}</p>;
        }

        let displayHeight;
        if (props.selectedPokemon.height) {
            displayHeight = <p>Height: {props.selectedPokemon.height}</p>;
        }
    
    return (
    <div>
        <h3>Details:</h3>
        {displayName}
        {displayHeight}
        <h3>Abilities:</h3>
        <ul>{abilities}</ul>
        <h3>Moves:</h3>
        <ul>{moves}</ul>
    </div>
    )
}

export default PokemonDetail;