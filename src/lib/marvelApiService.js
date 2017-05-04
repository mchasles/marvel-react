import axios from 'axios';
// API endpoint
const BASE_URL = 'https://gateway.marvel.com/v1/public/characters';
// API key
const API_KEY = 'cefd21ddeeea8bc5232fa3fe67c57e0f';
// URL of the default image when character portrait is not available
export const IMG_NOT_AVAILABLE_SRC = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/detail.jpg';
// URL suffix to add to resourceURI to get portrait
export const URL_PORTRAIT_SUFFIX  = '/detail.jpg';

// Fetch the 16 first characters from Marvel API (pagination will come later...)
export const loadCharacters = () => {
  return axios.get(BASE_URL, {
    params: {
      apikey: API_KEY,
      limit: 16,
      offset: 0
    }
  }).then(res => res.data.data.results)
};

// Fetch character info from Marvel API with its id
export const loadCharacter = (id) => {
  return axios.get(`${BASE_URL}/${id}`,{
    params: {
      apikey: API_KEY
    }
  }).then(res => res.data.data.results[0])
};

// Request character portrait image to check if available, if an error happens return default image src
export const getCharacterPortraitSrc = (path) => {
    let portraitSrc = `${path}${URL_PORTRAIT_SUFFIX}`;
    return axios.get(portraitSrc)
      .then(
        // Successfully get character portrait (but image might be the default one when not available)
        () => portraitSrc,
        // Error getting character portrait (error 404)
        () => IMG_NOT_AVAILABLE_SRC);
};