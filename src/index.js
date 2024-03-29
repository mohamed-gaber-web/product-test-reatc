import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './config/store';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter> <App /> </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

    
serviceWorker.unregister();
