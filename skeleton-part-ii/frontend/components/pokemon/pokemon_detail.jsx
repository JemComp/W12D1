import React from "react"

class pokemonDetail extends React.Component {

    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.requestPokemon(this.props.match.params.id)
        // console.log(this.props)
    }

    render() {
        // console.log(this.props)
        const currPokemon = this.props.pokemon
        console.log(currPokemon)
        return (
            <section className="pokemon-details">
                {/* <img src={this.props.imageUrl} alt="" /> */}
                <h1>DETAILS</h1>
                <h1>{currPokemon.name}</h1>
            </section>
        )
    }
}

export default pokemonDetail