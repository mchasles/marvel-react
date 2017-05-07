import React from 'react';
import {NavLink} from 'react-router-dom';
import {ReactLogoLoader} from '../ReactLogoLoader/';
import './MarvelCharactersList.scss';

export const MarvelCharactersList = (props) => {
  let content;
  if (props.error) {
    content = (
      <div className="error">
        <p>Error: Marvel API is unreachable</p>
        <p>Please retry later.</p>
      </div>
    );
  } else if (props.loading) {
    content = <ReactLogoLoader />;
  } else {
    content = (
      <ul>
        {props.characters.map((ch) => (
            <li key={ch.id}>
              <NavLink activeClassName="selected" to={`/character/${ch.id}`}>{ch.name}</NavLink>
            </li>
          ))}
      </ul>
    );
  }
  return (
    <div className="marvel-characters-list">{content}</div>
  );
}