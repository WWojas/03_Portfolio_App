import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';



class Homepage extends Component {



    render() {
        return (
            <div>

                    {/* NAVBAR */}

                    <header>
                        <nav className="navbar navbar-dark bg-primary navbar-expand-md">

                            <a className='navbar_brand m-sm-1 ' href='#'><img src="/app/images/Logo-2.png" width='40' height='40'
                             className="d-inline-block align-bottom" alt='przedszkole krakowiaczek'/> Krakowiaczek</a>

                            <button className='navbar-toggler' type='button'
                                    data-toggle='collapse' data-target='#mobile_nav_menu'>
                            <span className='navbar-toggler-icon'>
                            </span>
                            </button>

                            <div className='collapse navbar-collapse ' id='mobile_nav_menu'>
                                <ul className="navbar-nav mr-lg-1">

                                    <li className="nav-item dropdown  ">
                                        <a className="nav-link dropdown-toggle text-center" data-toggle="dropdown" role='button' > Placówki </a>

                                        <div className="dropdown-menu bg-primary">
                                       <NavLink to ="/reja" className='dropdown-item'> ul. Reja 13 </NavLink>
                                       <NavLink to ="/radzikowskiego" className='dropdown-item'> ul. Radzikowskiego 92 </NavLink>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </nav>
                    </header>

                <div classname="container">
                    <div className="row">


                        {/* Carousel for -xs to -sm resolutions */}

                    <div id="demo" className="carousel slide d-sm-none" data-ride="carousel">

                        {/* Indicators */}
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                        </ul>

                        {/* slideshow*/}
                        <div className="carousel-inner">

                            {/* REJA */}
                            <div className="carousel-item active">
                                <div className='img-fluid reja_pic'>
                                    <div className='text-content viewport_height'>
                                        <img src='/app/images/reja_pic.jpg' className="round_icon"/>
                                        <h1> Przedszkole Krakowiaczek </h1>
                                        <hr/>
                                        <h1> ul. Mikołaja Reja 13 </h1>
                                        <button className='btn btn-outline-secondary'><h1><NavLink to="/reja"> Strona Placówki </NavLink>
                                        </h1></button>
                                    </div>

                                </div>
                            </div>

                            {/* RADZIKOWSKIEGO */}
                            <div className="carousel-item">
                                <div className='img-fluid radzikowskiego_pic' id='radzikowskiego'>
                                    <div className='text-content viewport_height'>
                                        <img src='/app/images/radzikowskiego_pic.jpg' className="round_icon"/>
                                        <h1> Przedszkole Krakowiaczek </h1>
                                        <hr/>
                                        <h1> ul. Eljasza Radzikowskiego 92 </h1>
                                        <button className='btn btn-outline-secondary'><h1><NavLink to ="/radzikowskiego"> Strona Placówki </NavLink></h1></button>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>


                        {/* Split screen for -sm to -xl res*/}
                        <div className="row">
                            <div className='img-fluid reja_pic col-6  d-none d-sm-block'>
                                <div className='text-content viewport_height'>
                                    <img src='/app/images/reja_pic.jpg' className="round_icon"/>
                                    <h1> Przedszkole Krakowiaczek </h1>
                                    <hr/>
                                    <h1> ul. Mikołaja Reja 13 </h1>
                                    <button className='btn btn-outline-secondary'><h1><NavLink to="/reja"> Strona Placówki </NavLink>
                                    </h1></button>
                                </div>

                            </div>

                            <div className='img-fluid radzikowskiego_pic col-6  d-none d-sm-block' id='radzikowskiego'>
                                <div className='text-content viewport_height'>
                                    <img src='/app/images/radzikowskiego_pic.jpg' className="round_icon"/>
                                    <h1> Przedszkole Krakowiaczek </h1>
                                    <hr/>
                                    <h1> ul. Eljasza Radzikowskiego 92 </h1>
                                    <button className='btn btn-outline-secondary'><h1><NavLink to ="/radzikowskiego"> Strona Placówki </NavLink></h1></button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
                </div>





        )
    }
}

export default Homepage;