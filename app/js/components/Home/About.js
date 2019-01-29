import React, { Component } from 'react';


class About extends Component {
    render() {
        return (

            <section id='about'>

                <div className="row flex">
                    <div className="section_header"> About <hr/></div>
                </div>


                <div className="row about_wrapper">

                    {/*1st skill*/}
                    <div className="about_box col-12 col-sm-5 col-md-3 text-center">
                        <div claclassNamess="about_icon">
                            <img src='/app/images/about_1.svg' className="about_icon"/>
                        </div>
                        <div className="about_desc">
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


        )
    }
}

export default About