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

                           <div class="col-12 col-md-6 connect_wrapper">
                                <img src='/app/images/connect_bg_linkedin.jpg' className="connect_bg_pic img-fluid" />

                                <figcaption class="connect_desc flex">
                                <p className="quote">
                                    LinkedIn Profile
                                </p>
                                </figcaption>
                            </div>


                            <div className="col-12 col-md-6 connect_wrapper">
                                <img src='/app/images/connect_bg_github.jpg' className="connect_bg_pic img-fluid" />

                                <figcaption class="connect_desc flex">
                                <p className="quote">
                                    GitHub Profile
                                </p>
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