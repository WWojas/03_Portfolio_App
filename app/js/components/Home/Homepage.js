import React, { Component } from 'react';
import Header from "./Header";
import About from "./Author_subfolder/Features";
import Author from "./Author";
import Projects from "./Projects";
import Contact from "./Contact";




class Homepage extends Component {


    render() {
        return (
            <div>

                <div className="container-fluid">
                    < Header />
                        < Author />
                        < Projects />
                    < Contact />


                </div>
            </div>


        )
    }
}

export default Homepage;