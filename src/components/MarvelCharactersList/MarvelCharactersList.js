import React from 'react';
import {NavLink} from 'react-router-dom';
import './MarvelCharactersList.scss';

export const MarvelCharactersList = (props) => {
  return (
    <ul className="marvel-characters-list">{
      props.characters.map((ch) => (
        <li key={ch.id}>
          <NavLink activeClassName="selected" to={`/character/${ch.id}`}>{ch.name}</NavLink>
        </li>
      ))
    }</ul>
  );
}