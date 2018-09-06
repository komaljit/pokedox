import React, {Component} from 'react';
import Search from './search-bar';
import NameCard from './name-pokecard';
import TypeCard from './type-pokecard';

class Container extends Component{

    constructor(props){
        super(props);
        this.state = {
            pokeDoxCardData :'',
            cardType: ''
        }
    }

    showPokeDoxCard = (pokemonDetails, cardType) => {
        this.setState({
            pokeDoxCardData: pokemonDetails,
            cardType: cardType,
        })
    };

    render(){
        let Card;
        if (this.state.cardType === 'Name or Id') {
            Card = <NameCard pokemonDetails={this.state.pokeDoxCardData}/>
        } else if (this.state.cardType === 'Type or Id') {
            Card = <TypeCard pokemonDetails={this.state.pokeDoxCardData}/>
        }
        return (
            <div className='container'>
                    <Search showPokeDoxCard={this.showPokeDoxCard} />
                {this.state.pokeDoxCardData ?
                    Card : ''
                }
                <br/>
            </div>
        )
    }
}

export default Container;
