import React from 'react';
import Html_img from "../../../images/author/html.svg";
import css from "../../../images/author/css-3.svg";
import sass from '../../../images/author/sass.svg';
import JS from '../../../images/author/js.svg';
import react from '../../../images/author/react.svg';
import git from '../../../images/author/git.svg';
import rwd from '../../../images/author/rwd.svg';


class Author extends React.Component{
    render() {
        return (
            <section id='author'>

                <div className="row">


                            <div className="author_Wrapper text-center">
                                <img src='/images/author.jpg' className="img-fluid author_img"/>

                                <h2> About Me </h2>

                                <p>I'm the Front-End Developer, owner of CodeWave. <br/>

                                    I am dedicated towards making fully functional, usable web applications.
                                </p>


                            </div>


                            <div>

                            <div>
                                <div className="skill_box">


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


                                <div>
                                    <div className="skill_hex flex">
                                    <img src={JS} />
                                    <span> JAVASCRIPT (+ES6)</span>
                                    </div>

                                    <div className="skill_hex flex">
                                        <img src={rwd} />
                                        <span> RWD </span>
                                    </div>

                                    <div className="skill_hex flex">
                                        <img src={react} />
                                        <span> REACT </span>
                                    </div>

                                    <div className="skill_hex flex">
                                        <img src={git} />
                                        <span> GIT </span>
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