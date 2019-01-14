import React from 'react';
import Post from './post';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <h1>Hello my ReactJs App</h1>
                <Post title ="Post 1"/>
                <Post title ="Post 2"/>
                <Post title ="Post 3"/>
            </div>
        )
    }
}