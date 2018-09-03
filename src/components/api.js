import axios from 'axios';
const API = 'https://cors.io/?http://pokeapi.co/api/v2';

export const fetchPokemonDeatils = (pokemon) =>{
    console.log(`${API}/pokemon/${pokemon}`);
    axios.get(`${API}/pokemon/${pokemon}`)
        .then((res) => {
            return res})
        .catch(error => {
            console.log("This is error");
            return error;
        });
};
