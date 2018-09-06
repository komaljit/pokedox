import React, {Component} from 'react';
const API = 'https://cors.io/?http://pokeapi.co/api/v2';

/**
 * This component akes the input from user. On submit fetchs the data from API and passes the data to
 * Container along with the type of card to render. It also limits the search for a pokemon to 152 original
 */
class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            input:'',
            url: 'Name or Id',
            message: false,
        };
    }

    // change state on user input change
    changePokemon = (userInput) => {
        this.setState({
            input: userInput
        })
    };

    getPokemonDetails = (url) =>{
        fetch(`${API}/${url}/${this.state.input.toLowerCase()}`, {
            method: 'GET', mode:'cors',})
            .then((res) => {
                if (res.status === 200) {
                    return res.json();
                } else if (res.status === 404){
                    this.setState({message:"0 results found"});
                    return ''
                } else{
                    throw "Unknown error";
                }
            })
            .then((data) => {
                if (Number(data.id) < 152) {
                    this.props.showPokeDoxCard(data, this.state.url)
                } else if (data === ''){

                    // resetting the state of Container component
                    this.props.showPokeDoxCard('', '')
                }
                else{
                    this.setState({message:'Only first 151 pokemons can be searched'});

                    // resetting the state of container
                    this.props.showPokeDoxCard('', '')
                }
            })
            .catch(error => {
                return error;
            })
    };

    render(){
        return (
                <div className="row" id="search-row">
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <button type="button" className="btn btn-primary dropdown-toggle" id="change-url-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.url}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button className="dropdown-item" onClick={ ()=>{
                                    this.state.url === 'Type or Id' ?
                                        this.setState({url:'Name or Id'}) : this.setState({url:'Type or Id'});
                                }}>
                                    {this.state.url === 'Type or Id' ? 'Name or Id' : 'Type or Id'}
                                </button>
                            </div>
                        </div>

                        <input type="text" className="form-control" id='input-a' placeholder="Search" aria-label="Text input with dropdown button" onChange={
                            (event)=>{
                                this.changePokemon(event.target.value);
                            }
                        }/>
                        <button type="button" className="btn btn-primary btn-lg" id='api-call-button' data-toggle="popover" title="click to search" onClick={
                            () =>{
                                this.setState({message:false});
                                if (this.state.input !== ''){
                                    if (this.state.url === 'Type or Id'){
                                        this.getPokemonDetails('type');
                                    }else{
                                        this.getPokemonDetails('pokemon');
                                    }
                                }
                            }
                        }>Submit</button>
                    </div>
                    {this.state.message ? <div className="col-lg-5 col-centered">{this.state.message}</div> : '' }

                </div>
        )
    }
}

export default SearchBar;
