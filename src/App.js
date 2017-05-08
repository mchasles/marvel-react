import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import {MarvelCharactersList} from './components/MarvelCharactersList/'
import {MarvelCharacterDetail} from './components/MarvelCharacterDetail/'
import {loadCharacters} from './lib/marvelApiService'
import './App.scss';
import logo from './assets/logo.svg';

class App extends Component {
  state = {
    characters: [],
    error: false,
    loading: true,
    updateCharacters: this.updateCharacters.bind(this)
  }

  componentDidMount() {
    this.updateCharacters();
  }

  updateCharacters(offset) {
    this.setState({ loading: true});
    return loadCharacters(offset)
      .then(
        characters => this.setState({ loading: false, characters }),
        error      => this.setState({ loading: false, error: true })
      );
  }

  render() {
    return (
      <Router>
        <div className="app">
          <MarvelCharactersList {...this.state}></MarvelCharactersList>
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
