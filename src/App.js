import React from 'react';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Application from "./components/Application";
//import logo from './logo.svg';
//import './App.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

export default App;
