import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Application from "./components/Application";
import configureStore from "./stores";
//import logo from './logo.svg';
//import './App.css';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

export default App;
