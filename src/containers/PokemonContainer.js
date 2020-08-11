import React, {Component} from 'react';
import PokemonSelector from '../components/PokemonSelector';
import PokemonDetail from '../components/PokemonDetail';

class PokemonContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemon: [],
            selectedPokemonName: "",
            selectedPokemon: {
                abilities: [],
                height: null,
                moves: []
            }
        }

        this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
    }

    componentDidMount() {
        const url = "http://pokeapi.co/api/v2/pokemon/?limit=151";

        fetch(url)
        .then(res => res.json())
        .then(pokemon =>this.setState({pokemon: pokemon.results}))
        .catch(err => console.error);
    }

    handlePokemonSelected(newPokemonName) {
        const pokemon = this.state.pokemon.find((pokemon) => {
            return pokemon.name === newPokemonName;
        })
        fetch(pokemon.url)
        .then(res => res.json())
        .then(pokemonDetails => {
            this.setState({
                selectedPokemonName: newPokemonName,
                selectedPokemon: {
                    abilities: pokemonDetails.abilities,
                    height: pokemonDetails.height,
                    moves: pokemonDetails.moves
                }
            })
        })
    }

    render() {

        const selectedPokemon = this.state.pokemon.find((pokemon) => {
            return pokemon.name === this.state.selectedPokemonName;
        })

        let pokemonAbilities;
        if (selectedPokemon) {
            fetch(selectedPokemon.url)
            .then(res => res.json())
            .then(abilities => pokemonAbilities = abilities)
            .catch(err => console.error);
        }

        return (

            <div className="pokemon-container">
                <h2>Pokemon</h2>
                <PokemonSelector 
                    pokemon={this.state.pokemon} 
                    onPokemonSelected={this.handlePokemonSelected}
                />
                <PokemonDetail
                    pokemonName={this.state.selectedPokemonName}
                    selectedPokemon={this.state.selectedPokemon}
                />
            </div>
        )
    }

}

export default PokemonContainer;