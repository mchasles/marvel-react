export const characters = [
  {
    'id': 1,
    'name': '3-D Man',
    'thumbnail': {
      'path': 'http://mock/'
    }
  },
  {
    'id': 2,
    'name': 'A-Bomb (HAS)',
    'thumbnail': {
      'path': 'http://mock/'
    }
  }
];

export const loadCharacters = () => {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => resolve(characters)
    );
  });
}

export const loadCharacter = (id) => {
  return new Promise((resolve) => {
    process.nextTick(
      () => characters[id] ? resolve(characters[id]) : reject({
        error: `Character with ${id} not found.`,
      })
    );
  });
}