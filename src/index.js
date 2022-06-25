import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";
import rootReducers from './reducers'

const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare, ];

const store = createStore(
  rootReducers,
  {},
  applyMiddleware(...middlewares)
)

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
