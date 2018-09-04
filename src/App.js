import React, { Component } from 'react';
import './App.css';
import Container from './components/container';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
      <div className="App">
          <BrowserRouter>
        <Container />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
