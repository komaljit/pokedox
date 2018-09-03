import React, {Component} from 'react';
import {fetchPokemonDetails} from "./api";

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            pokemon:'',
            url: 'name',
        };
    }

    changePokemon = (pokemon) => {
        this.setState({
            pokemon: pokemon
        })
    };

    getPokemonDetails = (pokemon) =>{
        fetchPokemonDetails(pokemon)
            .then((data) => {
                this.props.showPokeDoxCard(data)})
            .catch(error => {
                console.log(error);
                return error;
            });
    };

    render(){
        return (
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Search by {this.state.url}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item" onClick={
                                ()=>{
                                    this.state.url === 'type' ?
                                        this.setState({url:'name'})
                                        : this.setState({url:'type'});
                                }
                            }> {this.state.url === 'type' ?
                                'name'
                                : 'type'}</button>
                        </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" onChange={
                        (event)=>{
                            this.changePokemon(event.target.value);
                        }}/>
                    <button type="button" onClick={
                        () =>{
                            this.getPokemonDetails(this.state.pokemon)
                        }
                    }>
                        Search
                    </button>
            </div>
        )
    }
}
