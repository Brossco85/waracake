import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import CakesIndex from './components/CakesIndex';
import CakesNew from './components/CakesNew';
import CakesShow from './components/CakesShow';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <App/>
        <Switch>
          <Route path='/cakes/new' component={CakesNew} />
          <Route path='/cakes/:id' component={CakesShow} />
          <Route path='/' component={CakesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
  );

registerServiceWorker();
