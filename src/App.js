import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './React-Redux/store.js';
import CounterApp from './React-Redux/CounterApp.js';

const App = () => {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
};

export default App;