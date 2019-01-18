import React, { Component } from 'react';

class Reja_S2_Staff extends Component {
    render() {
        return (
            <div>
                <div className='row'>

                    <div className='col-12 col-md-6'>

                        <h3> Krakowiaczek to miejsce do <strong> Nauki</strong></h3>
                        <p>Educating children is our mission and YOU the parents are our customers. Our programs are designed to offer parents flexibility while maximizing the benefits to our students. </p>

                    </div>

                    <div className='col-md-2 col-md-offset-1  section_2_thumbnail'>
                        <img src='/app/images/about_us.jpg' className='section_2_thumbnail_img' />
                        <p> Nasza Filozofia</p>
                    </div>
                    <div className='col-md-2 col-md-offset-1 section_2_thumbnail'>
                        <img src='/app/images/about_us.jpg' className='section_2_thumbnail_img' />
                        <p> Co oferujemy</p>
                    </div>
                    <div className='col-md-2 col-md-offset-1 section_2_thumbnail'>
                        <img src='/app/images/about_us.jpg' className='section_2_thumbnail_img' />
                        <p> Zapisy</p>
                    </div>
                    <div className='col-md-2 col-md-offset-1 section_2_thumbnail'>
                        <img src='/app/images/about_us.jpg' className='section_2_thumbnail_img' />
                        <p> Kim jesteśmy</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Reja_S2_Staff;