import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Profile from './components/users/Profile';
import Login from './components/users/Login';
import MainPage from "./components/MainPage";
import ArticlePage from "./components/ArticlePage";
import Header from "./components/Header";
import NewArticleForm from "./components/article/NewArticleForm";
import NewDraftForm from "./components/article/NewDraftForm";
import DraftPage from "./components/DraftPage";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Header} />
            <Route exact path="/" component={MainPage} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/profile/:id/drafts/:name" component={DraftPage} />
            <Route exact path="/profile/" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/articles/" component={MainPage} />
            <Route exact path="/create_new_article" component={NewArticleForm} />
            <Route exact path="/create_new_draft" component={NewDraftForm} />
            <Route exact path="/articles/:id" component={ArticlePage} />
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
