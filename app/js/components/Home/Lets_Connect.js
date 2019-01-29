import React from 'react';

class Lets_Connect extends React.Component{
    render() {
        return (
            <section id='lets_connect'>
                <div className="container_1200">

                    <div className="row flex justify-content-center">
                        <div className="section_header"> Let's Connect <hr/></div>
                        <p> Here you can learn more about me and my work</p>

                        <div className='flex text-center'>

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
            );
         }
        }

export default Lets_Connect;