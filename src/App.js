import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import {MarvelCharactersList} from './components/MarvelCharactersList/'
import {MarvelCharacterDetail} from './components/MarvelCharacterDetail/'
import {loadCharacters} from './lib/marvelApiService'
import './App.scss';
import logo from './assets/logo.svg';

class App extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    loadCharacters()
      .then(characters => this.setState({characters}))
  }

  render() {
    const displayCharacters = this.state.characters;
    return (
      <Router>
        <div className="app">
          <MarvelCharactersList characters={displayCharacters}></MarvelCharactersList>
          <Route exact={true} path='/' render={() => (
            <div className="app-landing-wrapper">
              <img className="react-logo-landing" src={logo} alt="React logo" />
            </div>
          )}/>
          <Route path='/character/:id' component={MarvelCharacterDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
