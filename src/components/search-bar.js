import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
const API = 'https://cors.io/?http://pokeapi.co/api/v2';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            input:'',
            url: 'Name or Id',
        };
    }

    changePokemon = (userInput) => {
        this.setState({
            input: userInput
        })
    };

    getPokemonDetails = (url) =>{
        axios.get(`${API}/${url}/${this.state.input}`)
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    return res.data;
                } else if (res.status === 404){
                    throw "Not found";
                } else{
                    throw "Unknown error";
                }
            }).then((data) => {
                console.log('in the ai call func', data);
                this.props.showPokeDoxCard(data, this.state.url)})
            .catch(error => {
                return error;
            })
    };

    render(){
        console.log(this.state.url);
        return (
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.url}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item" onClick={
                                ()=>{
                                    this.state.url === 'Type or Id' ?
                                        this.setState({url:'Name or Id'})
                                        : this.setState({url:'Type or Id'});
                                }
                            }> {this.state.url === 'Type or Id' ?
                                'Name or Id'
                                : 'Type or Id'}</button>
                        </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" onChange={
                        (event)=>{
                            this.changePokemon(event.target.value);
                        }}/>
                    <button type="button" className="btn btn-lg btn-primary" data-toggle="popover" title="click to search" onClick={
                        () =>{
                            if (this.state.input !== ''){
                                if (this.state.url === 'Type or Id'){
                                    this.getPokemonDetails('type');
                                }else{
                                    this.getPokemonDetails('pokemon');
                                }
                            }
                        }
                    }>
                        Search
                    </button>
            </div>
        )
    }
}

export default withRouter(Search);
