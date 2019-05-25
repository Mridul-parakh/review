import 'materialize-css/dist/css/materialize.min.css';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './store';
import axios from 'axios';
window.axios=axios;

ReactDOM.render(<Provider  store={Store} ><BrowserRouter>
    <App/>
  </BrowserRouter></Provider>, document.getElementById('root'));
// console.log(process.env.REACT_APP_STRIPE_KEY);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
