# marvel-react

This is a small project done in order to learn React.js.
It requests Marvel API to display a list of 16 characters and display character portrait when clicking on his name.

It's very simple and have only 4 components :
- App: the root component which bootstraps the app fetching the list of marvel characters from Marvel API
- MarvelCharactersList: display the list of characters
- MarvelCharacterDetail: display the name and the portrait of a charcter
- ReactLogoLoader: displayed spinning react logo while fetching a character info from Marvel API- 

## Scaffolding
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup

### Install dependencies
After cloning the project, run:
``` bash
npm install
```

### Start the application
To launch the application in development with hot reload, run
```
npm start
```

To launch unit testing, run
```
npm run test
```

## Next steps to improve the application
- Use redux, react-redux and redux-thunk to manage application state
- Complete unit tests
- Add functional tests
- Improve UX
- Add pagination to navigate through characters list
- ... and many other things
