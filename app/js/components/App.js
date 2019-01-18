import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Homepage from './Home/Homepage.js';
import Radzikowskiego from './Radzikowskiego/Radzikowskiego.js';
import Reja from './Reja/Reja.js';
import Error from "./Error/Error.js";

class App extends Component{
    render(){
        return (

            <HashRouter>
                <Switch>
                    <Route exact path="/" component = {Homepage} />
                    <Route  path="/radzikowskiego" component = {Radzikowskiego} />
                    <Route  path="/reja" component = {Reja} />
                    <Route component={Error} />
                </Switch>
            </HashRouter>

        );
    }
}


export default App;