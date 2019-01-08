import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className='container'>

                <div className='row'>

                <div className='left_pic img-fluid col-sm-2 col-md-6'>

                    <div className='text-content'>
                    <h1><NavLink to ="/reja"> Reja </NavLink></h1>
                    </div>

                </div>


                <div className='right_pic img-fluid col-sm-2 col-md-6'>

                    <div className='text-content'>
                    <h1><NavLink to ="/radzikowskiego"> Radzikowskiego </NavLink></h1>
                    </div>

                </div>

                </div>
            </div>
        )
    }
}

export default Home;