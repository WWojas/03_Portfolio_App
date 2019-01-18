import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class Reja_header extends Component {
    render() {
        return (
            <div>
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


            </div>
        )
    }
}

export default Reja_header;