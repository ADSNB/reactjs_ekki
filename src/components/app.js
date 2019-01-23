import React from 'react';
import Login from './login';
import Register from './register';
import Home from './home';

export default class App extends React.Component {
    componentWillMount() {
        console.log('App component loaded');
    }

    render(){
        return(
            <div className="">
                <Login />
            </div>
        )
    }
}