import React from 'react';

class Author extends React.Component{
    render() {
        return (
            <section id='author'>

                <div className="row">

                    <div className="col">
                        <div className="row">

                            <div className="col-12 col-sm-6 text-center">
                                <img src='/images/author.jpg' className="img-fluid author_img"/>

                                <h2> Who am I </h2>

                                <p>I'm the Front-End Developer, owner of CodeWave, Cracov, Poland. <br/>
                                    I am dedicated towards making fully functional, usable web applications.
                                </p>
                            </div>


                            <div className="col-12 col-sm-6 text-left">
                                <div className="skill_box">


                                    <div className="skill_hex flex"> HTML</div>
                                    <div className="skill_hex flex"> CSS</div>
                                    <div className="skill_hex flex"> SASS</div>
                                    <div className="skill_hex flex"> Javascript</div>
                                    <div className="skill_hex flex"> jQuery</div>
                                    <div className="skill_hex flex"> REST API</div>
                                    <div className="skill_hex flex"> React JS & Webpack</div>
                                    <div className="skill_hex flex"> Bootstrap & GIT</div>
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