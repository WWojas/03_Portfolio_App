import React from 'react';
import {HashLink as Link} from "react-router-hash-link";
import main_arrow from '../../../images/main_arrow.svg';

const main_bg = {
    backgroundImage: `url('./images/main_bg.jpg')`,
    backgroundSize: `cover`,
    width: `100%`,
    height: `100vh`
}

class Header extends React.Component{


    componentDidMount() {

        window.addEventListener('scroll', this.resizeHeaderOnScroll);
    }


    resizeHeaderOnScroll = () => {
      var desktop_header = document.querySelector('#main_navbar');
        desktop_header.style.height='25px';

        var desktop_navbar = document.querySelector('.navbar');
        desktop_navbar.style.borderBottom='3px solid orange';


        var mobile_nav_color = document.querySelector('#mobile_navbar');
        mobile_nav_color.style.borderBottom='3px solid orange';

        var mobile_nav_hide = document.querySelector('#navbarSupportedContent1');
        mobile_nav_hide.classList.remove('show')


    }



    render() {
        return (
            <section id='home'>
                <div className='body_pic flex text-center' style={ main_bg}>
                    <img src='/images/CodeWave.svg' className='logo_main'/>


                    <button className='btn_header'> <Link to ="/#projects"><span> Portfolio </span></Link></button>

                </div>


                {/* Navbar*/}

                {/* Desktop */}
                <nav className="navbar navbar-expand-sm fixed-top d-none d-sm-block">
                    <ul className="navbar-nav align-items-center" id='main_navbar'>
                        <li className="nav-item active px-5">
                            <Link to ="/" className='dropdown-item'> Home </Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to ="/#about" className='dropdown-item'> About </Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to ="/#projects" className='dropdown-item'> Portfolio </Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to ="/#lets_connect" className='dropdown-item'> Connect </Link>
                        </li>
                        <li className="nav-item px-5">
                            <Link to ="/#contact" className='dropdown-item'> Contact </Link>
                        </li>
                    </ul>
                </nav>


                {/* Mobile */}
                <nav className="navbar navbar-light light-blue lighten-4 d-block d-lg-none fixed-top" id='mobile_navbar'>

                    <div className="flex_hamburger" >
                    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent1"
                            aria-controls="navbarSupportedContent1" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <img src='/images/hamburger_icon.svg' />

                    </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent1">


                        <ul className="navbar-nav mr-auto align-items-center">
                            <li className="nav-item px-5">
                                <Link to ="/" className='dropdown-item'> Home </Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link to ="/#about" className='dropdown-item'> About </Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link to ="/#projects" className='dropdown-item'> Portfolio </Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link to ="/#lets_connect" className='dropdown-item'> Connect </Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link to ="/#contact" className='dropdown-item'> Contact </Link>
                            </li>
                        </ul>

                    </div>
                </nav>


            </section>
            );
         }
        }

export default Header;

