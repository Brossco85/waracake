import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

import CakesIndex from './components/CakesIndex';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path='/' component={CakesIndex} />
    </div>

  </BrowserRouter>,
  document.getElementById('root')
  );

registerServiceWorker();
