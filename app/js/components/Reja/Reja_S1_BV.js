import React, { Component } from 'react';

class Reja_S1_BV extends Component {
    render() {
        return (
            <div>

                <div className="bg_video col-12">

                    <video autoPlay muted loop id="myVideo">
                        <source src="/app/images/bg_video_Reja.mp4" type="video/mp4"> </source>
                    </video>

                </div>

            </div>
        )
    }
}

export default Reja_S1_BV;