import React, { Component } from 'react';
import {IMG_NOT_AVAILABLE_SRC, loadCharacter, getCharacterPortraitSrc} from '../../lib/marvelApiService';
import {ReactLogoLoader} from '../ReactLogoLoader/';
import './MarvelCharacterDetail.scss';

export class MarvelCharacterDetail extends Component {
  
  state = {
    character: null
  }

  componentDidMount() {
    return loadCharacter(this.props.match.params.id)
      .then(this.setCharacterPortraitSrc.bind(this));
  }

  componentWillReceiveProps(newProps) {
    this.setState({character: null}); // Set character state to null to display loader
    return loadCharacter(newProps.match.params.id)
      .then(this.setCharacterPortraitSrc.bind(this));
  }

  setCharacterPortraitSrc(character){
    return getCharacterPortraitSrc(character.thumbnail.path)
      .then(
        // Successfully get character portrait (but image might be the default one when not available)
        (portraitSrc) => {
          // Preload image in browser's cache before updating state
          character.portraitSrc = portraitSrc;
          return this.loadImg(character.portraitSrc)
            .then(
              () => this.setState({character}),
              () => {
                // If image failed to load, set default image
                character.portraitSrc = IMG_NOT_AVAILABLE_SRC;
                this.setState({character});
              },
            );
        },
        // Error getting character portrait (error 404)
        (portraitSrc) => {
          character.portraitSrc = portraitSrc;
          this.setState({character});
        });
  }

  loadImg(src){
    return new Promise((resolve, reject) => {
      const img = document.createElement('img');
      img.src = src;
      img.onload = () => resolve('done');
      // If image does not load after 6 seconds, reject promise
      setTimeout(() => {
        reject('error')
      }, 6000);
    });
  }

  render() {
    return <div className="marvel-character-detail">{ this.renderContent() }</div>;
  }

  renderContent() {
    const character = this.state.character;
    if (!character) {
      return <ReactLogoLoader />;
    }
    return (
      <div>
        <h1>{character.name}</h1> 
        {this.renderThumbnail()}
      </div>
    );
  }

  renderThumbnail() {
    const character = this.state.character;
    if (character.portraitSrc === IMG_NOT_AVAILABLE_SRC) {
      // If image is not available, replace default image by custom message
      return (<div className="img-404">Image Not Found</div>);
    }
    return <img className="thumbnail" src={character.portraitSrc} alt={character.name}/>;
  }

}