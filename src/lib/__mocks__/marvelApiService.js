const IMG_NOT_AVAILABLE_SRC = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/detail.jpg';

export const characters = [
  {
    'id': '1',
    'name': '3-D Man',
    'thumbnail': {
      'path': 'http://mock/1'
    }
  },
  {
    'id': '2',
    'name': 'A-Bomb (HAS)',
    'thumbnail': {
      'path': ''
    }
  }
];

export const loadCharacters = () => {
  return new Promise((resolve, reject) => {
    resolve(characters);
  });
}

export const loadCharacter = (id) => {
  return new Promise((resolve, reject) => {
    let character = characters.find(ch => ch.id === id);
    character ? resolve(character) : reject({
      error: `Character with ${id} not found.`,
    })
  });
}

export const getCharacterPortraitSrc = (path) => {
  return new Promise((resolve, reject) => {
    if (path.length) {
      resolve(path + '/portrait.jpg');
    } else {
      reject(IMG_NOT_AVAILABLE_SRC);
    }
  });
}