import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/App.jsx';
import { store } from './js/store.js';

//Create fontAwesome library
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
library.add(faPlane);

//Init react
const root = document.createElement('div');
root.className = 'fullwindow';
document.body.appendChild(root);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, root
);
