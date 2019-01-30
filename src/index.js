import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/app';
import Login from './components/login';
import Register from './components/account/register';
import PageNotFound from './components/pageNotFound';
import Home from './components/menu/home';

ReactDOM.render (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} render={routerProps => <App {...routerProps} />} />
            <Route path="/login" component={Login}  />
            <Route path="/register" component={Register} />
            <Route path="/home" render={func => <Home {...func} tag='menu' />} />
            <Route path="/credit-card" exact={true} render={func => <Home {...func} tag='creditCardList' />} />
            <Route path="/credit-card/edit" exact={true} render={func => <Home {...func} tag='creditCardEdit' />} />
            <Route path="/account-history" render={func => <Home {...func} tag='accountHistory' />} />
            <Route path="/contact" exact={true} render={func => <Home {...func} tag='contactList' />} />
            <Route path="/contact/edit" exact={true} render={func => <Home {...func} tag='contactEdit' />} />
            <Route path="/contact/transfer" exact={true} render={func => <Home {...func} tag='contactTransfer' />} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
