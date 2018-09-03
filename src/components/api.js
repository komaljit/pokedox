import axios from 'axios';
const API = 'https://cors.io/?http://pokeapi.co/api/v2';

export const fetchPokemonDetails = (pokemon) =>{
    console.log(`${API}/pokemon/${pokemon}`);
    axios.get(`${API}/${this.state.url}/${pokemon}`)
        .then((res) => {
            return res.data})
        .catch(error => {
            console.log("This is error");
            return error;
        });
};
