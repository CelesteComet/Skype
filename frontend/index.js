import React from 'react';
import ReactDOM from 'react-dom';

// React Redux stuff
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

// Router stuff
import { HashRouter, Route } from 'react-router-dom';

// My own components
import App from './components/App'; 

const store = createStore(rootReducer);


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <HashRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </HashRouter>
  ,root)
});
