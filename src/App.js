import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing';

function App() {
    return (
        <>
            <div id="main_container">
                <Route exact path="/">
                    <Landing />     
                </Route>
            </div>
        </>
    )
}

export default App;
