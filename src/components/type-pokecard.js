import React, {Component} from 'react';

/**
 * This component is rendered when user search by type of pokemon. Since the API respond with names of pokemona
 * which has id  more that 151, the pokemon are filtered with calculatePagination function
 */
class TypeCard extends Component{

    constructor(props){
        super(props);
        this.state = {pagination: this.calculatePagination(this.props),
        paginationIndex:0
        };
    }

    // filtering pagination to name of pokemons based on the ids (ie. id should be smaller than 151 )
    calculatePagination = (nextProps)=>{
        for (var i = 0; i < nextProps.pokemonDetails.pokemon.length; i++) {

            // since url contains the id of the pokemon,
            var tempArr = nextProps.pokemonDetails.pokemon[i].pokemon.url.split('/');

            // the id of pokemon is greater than 151, set the pagination to display
            if (Number(tempArr[tempArr.length-2]) > 151) {
                return Math.ceil(i/5);
            }
        }
        return Math.ceil(nextProps.pokemonDetails.pokemon.length/5);
    };

    // it will recalculate the pagination and pagination index when new search is done by user
    componentWillReceiveProps(nextProps){
        this.setState({ pagination: this.calculatePagination(nextProps),
            paginationIndex: 0
        })
    }

    // it render the list of names of the pokemons that are in the searched type
    pokemonList = ()=>{
        return (this.props.pokemonDetails.pokemon.slice((this.state.paginationIndex*5),this.state.paginationIndex*5+5)).map((pokemon, key)=> {
            return (
                <div className="d-flex" key={key}>
                    <div className="p-2">
                        {pokemon.pokemon.name.toUpperCase()}
                    </div>
                </div>
            )
        });
    };

    // it renders the pagination list
    paginationButtonList = ()=>{
        return ([...Array(this.state.pagination).keys()].map(i =>{
            return (
                <li className="page-item" key={i}>
                    <button className="page-link" onClick={()=>{this.setState({paginationIndex:i})}}>{i}</button>
                </li>
            )})
        )
    };

    render(){
        return(
            <div className="container" id="pokemon-card" >
                <div className="row" id="row-2">

                    <div className="col-4">
                        <div className="d-flex mb-3">
                            <div className="p-2" ><h2>Type Card</h2></div>
                        </div>
                        <img src="navbar.jpg" className="rounded-circle" alt="Not available" height="250" width="200"/>
                    </div>

                    <div className="col-3">
                        <br/>
                        <br/>
                        <div className="d-flex mb-3">
                            <div className="p-2"><b>Name:</b></div>
                        </div>

                        <div className="d-flex mb-3">
                            <div className="p-2"><b>ID:</b></div>
                        </div>

                    </div>
                    <div className="col-2">
                        <br/>
                        <br/>
                        <div className="d-flex mb-3">
                            <div className="p-2">{this.props.pokemonDetails.name.toUpperCase()}</div>
                        </div>

                        <div className="d-flex mb-3">
                            <div className="p-2">{this.props.pokemonDetails.id}</div>
                        </div>

                    </div>
                </div>

                <div className="row" id="row-3">
                    <div className="col-3">
                        <div className="d-flex mb-3">
                            <div className="p-2" id="profile-header"><b>Pokemons: </b></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        {this.pokemonList()}
                    </div>
                </div>

                <nav aria-label="...">
                    <ul className="pagination">
                        {this.paginationButtonList()}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TypeCard;