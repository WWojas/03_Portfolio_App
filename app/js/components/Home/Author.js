import React from 'react';
import Html_img from "../../../images/author/html.svg";
import css from "../../../images/author/css-3.svg";
import sass from '../../../images/author/sass.svg';
import JS from '../../../images/author/js.svg';
import react from '../../../images/author/react.svg';
import git from '../../../images/author/git.svg';
import rwd from '../../../images/author/rwd.svg';
import code_icon from '../../../images/author/coding.svg';
import {HashLink as Link} from "react-router-hash-link";


class Author extends React.Component{
    render() {
        return (
            <section id='author'>

                <div className="row">


                            <div className="author_Wrapper ">
                                <img src='/images/author.jpg' className="img-fluid author_img"/>

                                <div className='author_desc'>
                                <h2> Welcome to CodeWave </h2>


                                <p>My name is Wojciech Wojas and I'm the founder of CodeWave - a business dedicated to
                                    making high quality web applications. </p>

                                <p>
                                    Modern web development is one of the most challenging, demanding and evolving branch of XXI century commerce.
                                    I'm proud to be a part of this revolutionary movement and through my work so can you.

                                    <p>
                                    If you're looking for someone dedicated towards making fully functional, usable web applications look no further.
                                    </p>
                                </p>

                                </div>
                                <button className='author_desc_btn'> <Link to ="/#projects"><span> My Projects </span></Link></button>

                            </div>


                            <div class='w-100 m-5'>
                                <h2 className='text-center'> Technological Stack </h2>

                                <div className="skill_wrapper">

                                    <div className="skill_hex flex">
                                        <img src={Html_img} />
                                        <span> HTML </span>
                                    </div>
                                    <div className="skill_hex flex">
                                    <img src={css}/>
                                    <span> CSS</span>
                                    </div>

                                    <div className="skill_hex flex">
                                    <img src={sass} />
                                    <span> SASS </span>
                                    </div>
                                </div>


                                <div className='skill_wrapper'>
                                    <div className="skill_hex flex">
                                    <img src={JS} />
                                    <span> JS (+ES6)</span>
                                    </div>

                                    <div className="skill_hex flex">
                                        <img src={rwd} />
                                        <span> RWD </span>
                                    </div>

                                    <div className="skill_hex flex">
                                        <img src={react} />
                                        <span> REACT </span>
                                    </div>


                                </div>

                                <div className='skill_wrapper'>
                                    <div className="skill_hex flex">
                                        <img src={git} />
                                        <span> GIT </span>
                                    </div>
                                </div>

                                </div>


                    <div> <h2 className='text-center'> Key Features </h2>
                    <div className="row about_wrapper" id='about_animation_trigger'>
                        {/*1st skill*/}
                        <div className="about_box col-12 col-sm-5 col-md-3 text-center " id='about_animation'>
                            <div className="about_icon">
                                <img src='/images/about_1.svg' className="about_icon zoom"/>
                            </div>
                            <div className="about_desc">
                                <h4> Responsive </h4>
                                <p> My layouts will work on any device, large or small</p>
                            </div>
                        </div>

                        {/*2nd skill*/}
                        <div className="about_box col-12 col-sm-5 col-md-3 text-center" id='about_animation' >
                            <div className="about_icon">
                                <img src='/images/about_2.svg' className="about_icon zoom"/>
                            </div>
                            <div className="about_desc">
                                <h4> Fast </h4>
                                <p> My layouts are optimised for quick, trouble-free loading</p>
                            </div>
                        </div>

                        {/*3rd skill*/}
                        <div className="about_box col-12 col-sm-5 col-md-3 text-center" id='about_animation' >
                            <div className="about_icon">
                                <img src='/images/about_3.svg' className="about_icon zoom"/>
                            </div>
                            <div className="about_desc">
                                <h4> Dynamic </h4>
                                <p> My layouts are engaging and eye-catching</p>
                            </div>
                        </div>

                        {/*4th skill*/}
                        <div className="about_box col-12 col-sm-5 col-md-3 text-center" id='about_animation'>
                            <div className="about_icon">
                                <img src='/images/about_4.svg' className="about_icon zoom"/>
                            </div>
                            <div className="about_desc">
                                <h4> Intuitive </h4>
                                <p> My layouts are designed with UX/UI experience in mind</p>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>

            </section>
            );
         }
        }

export default Author;