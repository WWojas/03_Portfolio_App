import React, { Component } from 'react';

class Reja_S3_Programs extends Component {
    render() {
        return (
            <div>
                <div className='row'>

                    <div className='col-12 mx-auto'>
                        <h1> Programy Nauczania</h1>
                    </div>

                    {/* Grupa Smoczki*/}
                    <div className='col-12 col-md-6'>

                        <div class="programs_img_box">
                        <img src='/app/images/adorable-beautiful-child-265957.jpg' className='section_3_programs_img' />
                        </div>

                        <div class="programs_text">
                        <p className='section_3_programs_border_1'> Grupa Smoczki (3-4 lata) </p>
                        </div>
                    </div>


                    {/* grupa Dratewka*/}
                    <div className='col-12 col-md-6'>

                        <div className="programs_img_box">
                            <img src='/app/images/adorable-beautiful-child-265957.jpg'
                                 className='section_3_programs_img'/>
                        </div>

                        <div className="programs_text">
                            <p className='section_3_programs_border_1'> Grupa Smoki (5-6 lat) </p>
                        </div>
                    </div>




                </div>


            </div>
        )
    }
}

export default Reja_S3_Programs;