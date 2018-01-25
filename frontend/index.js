import React from 'react';
import ReactDOM from 'react-dom';

// React Redux stuff
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';


import App from './components/App'; 
import { someArray } from './components/App'

const store = createStore(rootReducer);


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>
  ,root)
});
