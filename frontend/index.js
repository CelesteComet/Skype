import React from 'react';
import ReactDOM from 'react-dom';

// React Redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// Router stuff
import { HashRouter, Route } from 'react-router-dom';

// Middleware stuff
import { smileyParser } from './middleware/index';

// My own components
import App from './components/App'; 

let store;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = createStore(rootReducer, preloadedState, applyMiddleware(thunk, smileyParser, logger));
    delete window.currentUser;
  } else {
    store = createStore(rootReducer, applyMiddleware(thunk, smileyParser, logger));
  }

  window.store = store;
  
  ReactDOM.render(
    <HashRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </HashRouter>
  ,root)
});
