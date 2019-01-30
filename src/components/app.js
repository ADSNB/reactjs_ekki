import React from 'react';
import Login from './login';

export default class App extends React.Component {
    componentWillMount() {
        console.log('App component loaded');
        this.props.history.push('/login');
    }

    render(){
        return(
            <div className="">
                <Login />
            </div>
        )
    }
}