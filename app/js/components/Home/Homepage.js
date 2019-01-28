import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';




class Homepage extends Component {


    scrollToFirst = () => {
        window.scrollTo(0, this.home)

    };

    render() {
        return (
            <div>


                {/* HOME */}

                <div classname="container-fluid">

                    <section id='home'>
                        <div className='body_pic flex text-center'>
                            <h1> Welcome to CodeWave</h1>
                            <button className='btn btn-outline-secondary'><h1>
                                <NavLink to="/portfolio"> Projects <img src='/app/images/main_arrow.svg' class="main_arrow" /> </NavLink>
                            </h1></button>
                        </div>

                    </section>



                    <div className="container_1200">
                        {/* About */}

                        <section id='about'>
                            <div className="row flex">
                                <div className="section_header"> About <hr /> </div>
                            </div>


                            <div class="row about_wrapper">

                                {/*1st skill*/}
                                <div className="about_box col-12 col-sm-5 col-md-3 text-center">
                                    <div claclassNamess="about_icon">
                                        <img src='/app/images/about_1.svg' className="about_icon"/>
                                    </div>
                                    <div class="about_desc">
                                        <h4> Responsive </h4>
                                        <p> My layouts will work on any device, large or small</p>
                                    </div>
                                </div>

                                {/*2nd skill*/}
                                <div className="about_box col-12 col-sm-5 col-md-3 text-center">
                                    <div className="about_icon">
                                        <img src='/app/images/about_2.svg' className="about_icon"/>
                                    </div>
                                    <div className="about_desc">
                                        <h4> Fast </h4>
                                        <p> My layouts are optimised for quick, trouble-free loading</p>
                                    </div>
                                </div>

                                {/*3rd skill*/}
                                <div className="about_box col-12 col-sm-5 col-md-3 text-center">
                                    <div className="about_icon">
                                        <img src='/app/images/about_3.svg' className="about_icon"/>
                                    </div>
                                    <div className="about_desc">
                                        <h4> Dynamic </h4>
                                        <p> My layouts are engaging and eye-catching</p>
                                    </div>
                                </div>

                                {/*4th skill*/}
                                <div className="about_box col-12 col-sm-5 col-md-3 text-center ">
                                    <div className="about_icon">
                                        <img src='/app/images/about_4.svg' className="about_icon"/>
                                    </div>
                                    <div className="about_desc">
                                        <h4> Intuitive </h4>
                                        <p> My layouts are designed with UX/UI experience in mind</p>
                                    </div>
                                </div>
                            </div>

                        </section>


                        <section id='author'>

                            <div class="row">

                                <div class="col">
                                    <div class="row">

                                        <div className="col-12 col-sm-6 text-center">
                                            <img src='/app/images/author.jpg' class="img-fluid author_img" />

                                            <h2> Who am I </h2>

                                            <p>I'm the Front-End Developer, owner of CodeWave, Cracov, Poland. <br />
                                                I have a dedication towards making fully functional, usable web applications.
                                            </p>
                                        </div>


                                        <div class="col-12 col-sm-6 text-left">
                                            <div class="skill_box">



                                                <div class="skill_hex flex"> HTML </div>
                                                <div className="skill_hex flex"> CSS</div>
                                                <div className="skill_hex flex"> SASS</div>
                                                <div className="skill_hex flex"> Javascript</div>
                                                <div className="skill_hex flex"> jQuery</div>
                                                <div className="skill_hex flex"> REST API</div>
                                                <div className="skill_hex flex"> React JS</div>
                                                <div className="skill_hex flex"> Webpack & GIT</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>


                    {/* Projects*/}

                    <section id='projects'>

                        <div className="container_1200">
                            <div className="row flex">
                                <div className="section_header"> Projects <hr/></div>
                            </div>


                            <div class="row projects_box justify-content-center">

                                {/* project no 1 */}
                                <div class="project_item col-sm-5">
                                    <img src='/app/images/Meditation_assistant.png' class="img-fluid"/>
                                </div>

                                {/* project no 2 */}
                                <div className="project_item col-sm-5 ">
                                    <img src='/app/images/Meditation_assistant.png' class="img-fluid"/>
                                </div>

                                {/* project no 3*/}
                                <div className="project_item col-sm-5">
                                    <img src='/app/images/Meditation_assistant.png' class="img-fluid"/>
                                </div>

                                {/* project no 4*/}
                                <div className="project_item col-sm-5">
                                    <img src='/app/images/Meditation_assistant.png' class="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Projects*/}

                    <section id='testimonials'>
                        <div className="container_1200">

                            <div className="row flex justify-content-center">
                                <div className="section_header"> Let's Connect <hr/></div>
                                <p> Here you can learn more about me and my work</p>

                            <div className='flex'>

                                <div>
                            <img src='/app/images/social_1.svg' className="avatar"/>
                            <p className="quote">
                                GitHub Profile
                            </p>
                            </div>

                                <div>
                                    <img src='/app/images/social_2.svg' className="avatar"/>
                                    <p className="quote">
                                        LinkedIn Profile
                                    </p>
                                </div>
                            </div>

                            </div>

                        </div>
                    </section>


                    {/* Contact */}


                    <section id='contact'>


                        <div className='row align-items-center'>

                            {/* Navigation div*/}
                            <div className='contact_section'></div>

                            <div className='img-fluid contact_pic col-12 justify-content-center'>


                                <div className="row">

                                    <form class="col-12 col-sm-6 top_padding" id="contact-form" method='post' role="form" action= 'contact.php'>

                                        <div className="row">
                                            <div className="section_contact flex">
                                                <h2> Contact <hr/></h2>
                                                <p> Have some questions? Want to get in touch?</p>

                                            </div>

                                        </div>

                                        <div className="messages"> </div>

                                        <div className="controls pt-5">

                                            <div className="row">

                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="form_name"> </label>
                                                        <input id="form_name" type="text" name="name"
                                                               className="form-control"
                                                               placeholder='Name'
                                                               required="required" data-error="Name is required"> </input>
                                                        <div className="help-block with-errors"> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="form_email"> </label>
                                                        <input id="form_email" type="email" name="email"
                                                               className="form-control"
                                                               placeholder="E-mail " required="required"
                                                               data-error="Valid email is required."> </input>
                                                        <div className="help-block with-errors"> </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label htmlFor="form_message"> </label>
                                                        <textarea id="form_message" name="message" className="form-control"
                                                                  placeholder="Message" rows="4"
                                                                  required="required"
                                                                  data-error="Please, leave us a message.">Your message </textarea>
                                                        <div className="help-block with-errors"> </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row'>

                                                <div className="col">
                                                    <input type="submit" className="btn btn-success btn-send"
                                                           value="Send message"> </input>
                                                </div>
                                            </div>

                                            <div className="col">
                                                <p className="text-muted">
                                                    <strong>*</strong> Required </p>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                                {/* arrow*/}
                                <div className="row">
                                    <div className='col'>
                                        <button className='home_arrow' onClick ={this.scrollToFirst}><img src='/app/images/up_arrow.svg'/></button>
                                    </div>

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