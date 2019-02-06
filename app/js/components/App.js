import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Homepage from './Home/Homepage.js';
import Error from "./Error.js";

class App extends Component{
    render(){
        return (

            <HashRouter>
                <Switch>
                    <Route exact path="/" component = {Homepage} />
                    <Route component={Error} />
                </Switch>
            </HashRouter>

        );
    }
}


export default App;