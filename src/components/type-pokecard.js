import React, {Component} from 'react';
import Search from './search-bar';
import Pokemon from './name-pokecard';
// import {data} from './data';

class Container extends Component{

    constructor(props){
        super(props);
        this.state = {pokeDoxCardData :''}
    }