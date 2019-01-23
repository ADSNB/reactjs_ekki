import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './custom.css';
import App from './components/app';
import Login from './components/login';
import Register from './components/register';
import PageNotFound from './components/pageNotFound';
import Home from './components/home';
import CreditCard from './components/creditCard';
import AccountHistory from './components/accountHistory';
import Contact from './components/contact';

ReactDOM.render (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} render={routerProps => <App {...routerProps} />} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/credit-card" component={CreditCard} />
            <Route path="/account-history" component={AccountHistory} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
