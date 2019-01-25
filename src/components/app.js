import React from 'react';
import Login from './login';

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