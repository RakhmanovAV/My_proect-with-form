import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reduxPromise from 'redux-promise';

import './index.css';
import App from './App';

const middleware = applyMiddleware(reduxPromise);
const store = createStore(rootReducer, {}, middleware);
ReactDOM.render(
<Provider store={store}>
<Router>
<Route path="/" component={App} />
</Router>
</Provider>
, document.getElementById('root'));


