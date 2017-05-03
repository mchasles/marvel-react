import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import {MarvelCharactersList} from './components/MarvelCharactersList/'
import {MarvelCharacterDetail} from './components/MarvelCharacterDetail/'
import {loadCharacters} from './lib/marvelApiService'
import './app.scss';

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
          <Route path='/character/:id' component={MarvelCharacterDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
