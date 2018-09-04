import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class TypeCard extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    pokemonList = ()=>{
        return Object.keys(this.props.pokemonDetails.pokemon).map((listValue) => {
            if (listValue < 151){
                return (
                    <div className="d-flex mb-3" key={listValue}>
                        {this.props.pokemonDetails.pokemon[listValue].pokemon.name.toUpperCase()}
                    </div>
                )
            }
        });
    };

    render(){
        return(
            <div className="container" id="pokemon-card" >
                <div className="row" id="row-2">

                    <div className="col-4">
                        <div className="d-flex mb-3">
                            <div className="p-2" ><h2>Type</h2></div>
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
                    <div className="col-3">
                        {this.pokemonList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(TypeCard);