import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './components/reducer';
import App from './App';


const store = createStore(loginReducer);
console.log(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

)
