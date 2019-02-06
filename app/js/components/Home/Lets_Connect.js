import React from 'react';

class Lets_Connect extends React.Component{
    render() {
        return (
            <section id='lets_connect'>
                <div className="container_1200">

                    <div className="row flex justify-content-center">
                        <div className="section_header"> Let's Connect <hr/></div>
                        <p> Here you can learn more about me and my work</p>

                        <div className='row flex_connect text-center'>

                           <div className="col-12 col-sm-6 connect_wrapper">
                                   <img src='/images/connect_bg_linkedin.jpg' className="connect_bg_pic img-fluid" />


                                <figcaption className="connect_desc flex">

                                        <img src='/images/social_1.svg' class="avatar_icon" />
                                <h2 className="quote">
                                    LinkedIn Profile
                                </h2>
                                    <a href='https://www.linkedin.com/in/wojciech-wojas/' target='blank'>
                                        <button className="btn"> SEE MORE </button>
                                    </a>
                                </figcaption>
                            </div>


                            <div className="col-12 col-sm-6 connect_wrapper">
                                <img src='/images/connect_bg_github.jpg' className="connect_bg_pic img-fluid" />

                                <figcaption class="connect_desc flex">

                                        <img src='/images/social_2.svg' className="avatar_icon"/>

                                <h2 className="quote">
                                    GitHub Profile
                                </h2>
                                    <a href='https://github.com/WWojas' target='blank'>
                                        <button className="btn"> SEE MORE </button>
                                    </a>
                                </figcaption>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            );
         }
        }

export default Lets_Connect;