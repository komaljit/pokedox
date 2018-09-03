import React, {Component} from 'react';
import Search from './search-bar';
import Pokemon from './name-pokedox';
import {data} from './data';

class Container extends Component{

    constructor(props){
        super(props);
        this.state = {pokeDoxCardData :''}
    }

    showPokeDoxCard = (pokemonDetails) => {
        this.setState({
            pokeDoxCardData: pokemonDetails
        })
    };

    render(){
        return (
            <div className='container'>
                <div className="row">
                    <Search showPokeDoxCard={this.showPokeDoxCard} />
                </div>
                    <Pokemon pokemonDetails={this.state.pokeDoxCardData} />
            </div>
        )
    }
}

export default Container;
