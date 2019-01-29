import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import Header from "./Header";
import About from "./About";
import Author from "./Author";
import Projects from "./Projects";
import Lets_Connect from "./Lets_Connect";
import Contact from "./Contact";




class Homepage extends Component {


    scrollToFirst = () => {
        window.scrollTo(0, this.home)

    };

    render() {
        return (
            <div>

                <div classname="container-fluid">
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