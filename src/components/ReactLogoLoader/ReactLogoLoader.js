import React from 'react';
import './ReactLogoLoader.scss';
import logo from '../../assets/logo.svg';

export const ReactLogoLoader = () => {
  return (<img className="react-logo-loader" src={logo} alt="React logo spinning" />);
}