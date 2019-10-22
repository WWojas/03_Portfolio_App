import React from 'react';
import {HashLink as Link} from "react-router-hash-link";

import Features from './Author_subfolder/Features';
import Technologies from "./Author_subfolder/Technologies";


class Author extends React.Component{
    render() {
        return (
            <section id='author'>


                <div className="container_1200">
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

                    <Technologies/>

                    <Features/>

                </div>
                </div>

            </section>
            );
         }
        }

export default Author;