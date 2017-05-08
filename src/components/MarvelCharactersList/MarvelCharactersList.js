import React from 'react';
import {Component} from 'react';
import {NavLink} from 'react-router-dom';

import {ReactLogoLoader} from '../ReactLogoLoader/';
import {Pagination} from './Pagination';

import './MarvelCharactersList.scss';

import {PAGE_LIMIT} from '../../lib/marvelApiService';

export class MarvelCharactersList extends Component {

  state = {
    offset: 0
  };

  nextCharacters() {
    let offset = this.state.offset + PAGE_LIMIT;
    this.props.updateCharacters(offset).then(() => {
      this.setState({offset});
    });
  }

  previousCharacters() {
    let offset = this.state.offset - PAGE_LIMIT;
    if (offset < 0) return;
    this.props.updateCharacters(offset).then(() => {
      this.setState({offset});
    });
  }

  render(){
    let content;
    if (this.props.error) {
      content = (
        <div className="error">
          <p>Error: Marvel API is unreachable</p>
          <p>Please retry later.</p>
        </div>
      );
    } else if (this.props.loading) {
      content = <ReactLogoLoader />;
    } else {
      content = (
        <div>
          <ul>
            {this.props.characters.map((ch) => (
                <li key={ch.id}>
                  <NavLink activeClassName="selected" to={`/character/${ch.id}`}>{ch.name}</NavLink>
                </li>
              ))}
          </ul>
        </div>
      );
    }
    return (
      <div className="marvel-characters-list">
        <Pagination 
          loading={this.props.loading} 
          offset={this.state.offset}
          previousCharacters={this.previousCharacters.bind(this)}
          nextCharacters={this.nextCharacters.bind(this)}
          />
        {content}
      </div>
    );
  }
}