import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './Home.js';
import Radzikowskiego from './Radzikowskiego.js';
import Reja from './Reja.js';
import Error from "./Error";

class App extends Component{
    render(){
        return (

            <HashRouter>
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route  path="/radzikowskiego" component = {Radzikowskiego} />
                    <Route  path="/reja" component = {Reja} />
                    <Route component={Error} />
                </Switch>
            </HashRouter>

        );
    }
}


export default App;