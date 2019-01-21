import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';



class Homepage extends Component {



    render() {
        return (
            <div>

                {/* HOME */}

                <div classname="container">

                    <section id='home'>
                        <div className='body_pic flex'>
                            <h1> Welcome to CodeWave</h1>
                            <button className='btn btn-outline-secondary'><h1><NavLink to="/portfolio"> Projects <i
                                className="fas fa-arrow-right"> </i> </NavLink>
                            </h1></button>
                        </div>

                    </section>



                    {/* About */}

                    <section id='about'>
                        <div className="row flex">

                            <div class="about_header"> About <hr /> </div>

                            <div class="about_wrapper">
                                <div class="about_icon">
                                    <i className="fas fa-mobile"></i>
                                </div>



                            </div>



                        </div>
                    </section>





                </div>
            </div>






        )
    }
}

export default Homepage;