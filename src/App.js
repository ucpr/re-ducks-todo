import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Application from "./components/Application";
//import logo from './logo.svg';
//import './App.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function App() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

export default App;
