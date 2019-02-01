import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component{
    render() {
        return (
            <section id='home'>
                <div className='body_pic flex text-center'>
                    <img src='/app/images/CodeWave.svg' className='logo_main'/>

                    <button className='btn btn-outline-secondary btn_header'>
                        <h1>
                        <NavLink to="/#projects"> Projects <img src='/app/images/main_arrow.svg'
                                                                className="main_arrow"/> </NavLink>
                    </h1></button>
                </div>


                {/* Navbar*/}

                {/* Desktop */}
                <nav className="navbar navbar-expand-sm fixed-top d-none d-sm-block">
                    <ul className="navbar-nav">
                        <li className="nav-item active px-5">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link" href="#">Connect</a>
                        </li>
                        <li className="nav-item px-5">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>


                {/* Mobile */}
                <nav className="navbar navbar-light light-blue lighten-4 d-block d-sm-none fixed-top">

                    <div className="flex_hamburger">
                    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent1"
                            aria-controls="navbarSupportedContent1" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <img src='/app/images/hamburger_icon.svg' />

                    </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">


                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active px-5">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item px-5">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item px-5">
                                <a className="nav-link" href="#">Portfolio</a>
                            </li>
                            <li className="nav-item px-5">
                                <a className="nav-link" href="#">Connect</a>
                            </li>
                            <li className="nav-item px-5">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                    </div>
                </nav>


            </section>
            );
         }
        }

export default Header;