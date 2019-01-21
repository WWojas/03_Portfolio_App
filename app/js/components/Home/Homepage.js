import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';



class Homepage extends Component {


    scrollToFirst = () => {
        window.scrollTo(0, this.home)

    }

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
                            <div class="section_header"> About <hr /> </div>
                        </div>


                            <div class="row about_wrapper">

                                {/*1st skill*/}
                                <div className="about_box col-12 col-sm-5 col-md-3  ">
                                <div claclassNamess="about_icon">
                                   <img src='/app/images/about_icon.svg' className="about_icon"/>
                                </div>
                                <div>
                                   <h4> Responsive</h4>
                                    <p> My layouts will work on any device, large or small</p>
                                </div>
                                </div>

                                {/*2nd skill*/}
                                <div className="about_box col-12 col-sm-5 col-md-3   ">
                                    <div className="about_icon">
                                        <img src='/app/images/about_icon.svg' className="about_icon"/>
                                    </div>
                                    <div>
                                        <h4> Responsive</h4>
                                        <p> My layouts will work on any device, large or small</p>
                                    </div>
                                </div>

                                {/*3rd skill*/}
                                <div className="about_box col-12 col-sm-5 col-md-3 ">
                                    <div className="about_icon">
                                        <img src='/app/images/about_icon.svg' className="about_icon"/>
                                    </div>
                                    <div>
                                        <h4> Responsive</h4>
                                        <p> My layouts will work on any device, large or small</p>
                                    </div>
                                </div>

                                {/*4th skill*/}
                                <div className="about_box col-12 col-sm-5 col-md-3 ">
                                    <div className="about_icon">
                                        <img src='/app/images/about_icon.svg' className="about_icon"/>
                                    </div>
                                    <div>
                                        <h4> Responsive</h4>
                                        <p> My layouts will work on any device, large or small</p>
                                    </div>
                                </div>
                            </div>

                    </section>



                    {/* Projects*/}
                    <section id='projects'>
                        <div className="row flex">
                            <div className="section_header"> Projects <hr/></div>
                        </div>


                            <div class="row projects_box">

                                {/* project no 1 */}
                                <div class="project_item col-sm-5">
                                    <img src='/app/images/meditation_ass.png' class="img-fluid"/>
                                </div>

                                {/* project no 2 */}
                                <div className="project_item col-sm-5 ">
                                    <img src='/app/images/meditation_ass.png' class="img-fluid"/>
                                </div>

                                {/* project no 3*/}
                                <div className="project_item col-sm-5">
                                    <img src='/app/images/meditation_ass.png' class="img-fluid"/>
                                </div>

                                {/* project no 4*/}
                                <div className="project_item col-sm-5">
                                    <img src='/app/images/meditation_ass.png' class="img-fluid"/>
                                </div>

                            </div>
                    </section>


                    {/* Contact */}


                    <section id='contact'>

                    <div className='row'>

                        {/* Navigation div*/}
                        <div className='contact_section'></div>

                        <div className='img-fluid contact_pic col'>

                            <div className="row flex">
                                <div className="section_header"> Contact <hr/></div>
                            </div>


                            <div className="row">

                            <form id="contact-form" method='post' role="form" action= 'contact.php'>

                                <div className="messages"> </div>

                                <div className="controls pt-5">

                                    <div className="row">

                                        <div className="col-md-6">
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
                                        <div className="col-md-6">
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
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="form_message"> </label>
                                                <textarea id="form_message" name="message" className="form-control"
                                                          placeholder="Message" rows="4"
                                                          required="required"
                                                          data-error="Please, leave us a message.">Your message </textarea>
                                                <div className="help-block with-errors"> </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="submit" className="btn btn-success btn-send"
                                                   value="Send message"> </input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className="text-muted">
                                                <strong>*</strong> Required </p>
                                        </div>
                                    </div>
                                </div>

                            </form>

                            <div className='col-md-6 '>
                                <button className='home_arrow' onClick ={this.scrollToFirst}><img src='/app/images/home_arrow.png'/></button>
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