import React from 'react';
import Post from './post';

export default class postApp extends React.Component {
    render(){
        return(
            <div>
                <h1>Hello my ReactJs Post App</h1>
                <Post title ="Post 1"/>
                <Post title ="Post 2"/>
                <Post title ="Post 3"/>
            </div>
        )
    }
}