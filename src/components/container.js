import React, {Component} from 'react';
import SearchBar from './search-bar';
import NameCard from './name-pokecard';
import TypeCard from './type-pokecard';

/**
 * This is the parent of all the components in the component folder. It renders SearchBar component and
 * depending on cardType state renders nothing or TypeCard or NameCard (also passes pokeDoxCardData as props)
 */
class Container extends Component{

    constructor(props){
        super(props);
        this.state = {
            pokeDoxCardData :'',
            cardType: ''
        };
    }

    // this function is passed to SearchBar as props to pass the data and card type (by name or type)
    showPokeDoxCard (pokemonDetails, cardType) {
        this.setState({
            pokeDoxCardData: pokemonDetails,
            cardType: cardType,
        })
    };

    render(){
        let Card;
        if (this.state.cardType === 'Name or Id') {
            // if the cardType is 'Name or Id', then NameCard will be rendered
            Card = <NameCard pokemonDetails={this.state.pokeDoxCardData}/>

        } else if (this.state.cardType === 'Type or Id') {

            // if the cardType is 'Type or Id', then TypeCard will be rendered
            Card = <TypeCard pokemonDetails={this.state.pokeDoxCardData}/>
        }
        return (
            <div className='container'>
                    <SearchBar showPokeDoxCard={this.showPokeDoxCard.bind(this)} />
                {this.state.pokeDoxCardData ?
                    Card : ''
                }
                <br/>
            </div>
        )
    }
}

export default Container;
