import React, { Component } from 'react';
import Header from "./Header";
import About from "./About";
import Author from "./Author";
import Projects from "./Projects";
import Lets_Connect from "./Lets_Connect";
import Contact from "./Contact";




class Homepage extends Component {


    render() {
        return (
            <div>

                <div className="container-fluid">
                    < Header />

                    <div className="container_1200">
                        < About />
                        < Author />

                    </div>
                        < Projects />
                        < Lets_Connect />

                    < Contact />


                </div>
            </div>


        )
    }
}

export default Homepage;