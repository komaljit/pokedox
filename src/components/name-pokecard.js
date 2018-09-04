import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class PokemonCard extends Component{
    constructor(props){
        super(props);
        this.state = {img: `https://img.pokemondb.net/artwork/${this.props.pokemonDetails.name}.jpg`}
    }

    componentWillMount(){
        if (this.props.pokemonDetails === ''){
            console.log("in comp didd mount of name-pokecard");
            this.props.history.push('/files');
        }
    }

    abilityList = ()=>{
        return Object.keys(this.props.pokemonDetails.abilities).map((listValue) => {
                return (
                    <div className="d-flex" key={listValue}>
                        <div className="p-2">
                            {this.props.pokemonDetails.abilities[listValue].ability.name.toUpperCase()}
                        </div>
                    </div>
                )
        });
    };

    typeList = ()=>{
        return Object.keys(this.props.pokemonDetails.types).map((listValue) => {
            return (
                <div className="d-flex" key={listValue}>
                    <div className="p-2">
                        {this.props.pokemonDetails.types[listValue].type.name.toUpperCase()}
                    </div>
                </div>)
        });
    };

    render(){
        return(
            <div className="container" id="pokemon-card" >
                <div className="row" id="row-2">

                    <div className="col-4">
                        <div className="d-flex mb-3">
                            <div className="p-2" ><h2>Profile</h2></div>
                        </div>
                        <img src={this.state.img} className="rounded-circle" alt="Not available" height="250" width="200"/>
                    </div>

                    <div className="col-3">
                        <br/>
                        <br/>
                        <div className="d-flex mb-3">
                            <div className="p-2"><b>Name:</b></div>
                        </div>

                        <div className="d-flex mb-3">
                            <div className="p-2"><b>Height:</b></div>
                        </div>

                        <div className="d-flex mb-3">
                            <div className="p-2"><b>Weight:</b></div>
                        </div>

                    </div>
                    <div className="col-2">
                        <br/>
                        <br/>
                        <div className="d-flex mb-3">
                            <div className="p-2">{this.props.pokemonDetails.name.toUpperCase()}</div>
                        </div>

                        <div className="d-flex mb-3">
                            <div className="p-2">{this.props.pokemonDetails.height}</div>
                        </div>

                        <div className="d-flex mb-3">
                            <div className="p-2">{this.props.pokemonDetails.weight}</div>
                        </div>

                    </div>
                </div>
                <div className="row" id="row-3">
                    <div className="col-3">
                <div className="d-flex mb-3">
                    <div className="p-2" id="profile-header"><b>Type:</b></div>
                </div></div>
                </div>
                <div className="row">
                    <div className="col-3">
                {this.typeList()}
                        </div></div>

                <div className="row" id="row-3">
                    <div className="col-3">
                        <div className="d-flex mb-3">
                            <div className="p-2" id="profile-header"><b>Special abilities: </b></div>
                        </div>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-3">
                            {this.abilityList()}
                        </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PokemonCard);
