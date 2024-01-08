import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './Redux-Toolkit/store.js'
import CounterApp from './Redux-Toolkit/CounterApp.js'
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='App'>
      <App />
      <br />

      <Provider store={store}>
        <CounterApp />
      </Provider>
    </div>
  </React.StrictMode>
);

reportWebVitals();
