import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import Profile from './components/users/Profile';
import MainPage from "./components/MainPage";
import ObjectPage from "./components/ObjectPage";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/scp_objects/:id" component={ObjectPage} />
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
