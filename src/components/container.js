import React, {Component} from 'react';
import Search from './search-bar';
import PokemonCard from './name-pokecard';
import TypeCard from './type-pokecard';
// import {data} from './data';

class Container extends Component{

    constructor(props){
        super(props);
        this.state = {
            pokeDoxCardData :'',
            cardType: ''
        }
    }

    showPokeDoxCard = (pokemonDetails, cardType) => {
        console.log(pokemonDetails);
        this.setState({
            pokeDoxCardData: pokemonDetails,
            cardType: cardType
        })
    };

    render(){
        console.log(this.state.cardType);
        let Card;
        if (this.state.cardType === 'Name or Id') {
            Card = <PokemonCard pokemonDetails={this.state.pokeDoxCardData}/>
        } else if (this.state.cardType === 'Type or Id') {
            Card = <TypeCard pokemonDetails={this.state.pokeDoxCardData}/>
        }
        return (
            <div className='container'>
                <div className="row">
                    <Search showPokeDoxCard={this.showPokeDoxCard} />
                    {Card}
                </div>
                <br/>
                {/*<Pokemon pokemonDetails={data} />*/}
            </div>
        )
    }
}

export default Container;
