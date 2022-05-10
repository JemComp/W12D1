import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component{
  constructor(props){
    super(props)
    
  }
  
  componentDidMount(){
    this.props.requestAllPokemon()
    
    console.log(`Mounted ${this.props.requestPokemon}`)
    
    // console.log(this.pokemonItems)
    // console.log(this.props)
  }
  
  render(){
  
    const pokemonItems = this.props.pokemon.map(poke => (
  
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));
    return (
    <section className="pokedex">
      <ul>
      {pokemonItems}
      </ul>
    </section>
    )
  }
  }
  
  
  
  export default PokemonIndex;
