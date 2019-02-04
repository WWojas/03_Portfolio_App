import React from 'react';


class Projects extends React.Component{



    render() {
        return (
            <section id='projects'>

                <div className="container_1200">
                    <div className="row flex">
                        <div className="section_header"> Projects <hr/></div>
                    </div>


                    <div className="row justify-content-center">



                        {/* Project no 1*/}
                        <div className="project_item img-fluid col-sm-5 flex">

                            <div class="project_box">

                            <img src="/app/images/Meditation_assistant.jpg" alt="" class="img-fluid project_image"/>

                            <figcaption className="project_inner_box flex" id='project_text'>
                                <h2> Meditation Assistant</h2>
                                <button className="btn"><a href='https://codewave.com.pl/meditation_app/' target="blank"> SEE MORE </a></button>
                            </figcaption>

                            </div>
                        </div>


                        {/* Project no 2*/}
                        <div className="project_item img-fluid col-sm-5 flex">

                            <div className="project_box">

                                <img src="/app/images/kindergarden_app.jpg" alt=""
                                     className="img-fluid project_image"/>

                                <figcaption className="project_inner_box flex" id='project_text'>
                                    <h2> Kindergarden Website</h2>
                                    <button className="btn"><a href='https://codewave.com.pl/app/'
                                                               target="blank"> SEE MORE </a></button>
                                </figcaption>
                            </div>
                        </div>


                        {/* Project no 3*/}
                        <div className="project_item img-fluid col-sm-5 flex">

                            <div className="project_box">

                                <img src="/app/images/3rd_app.jpg" alt=""
                                     className="img-fluid project_image"/>

                                <figcaption className="project_inner_box flex" id='project_text'>
                                    <h2> Portfolio Website</h2>
                                    <button className="btn"><a href='https://codewave.com.pl/error/'
                                                               target="blank"> AVAILABLE SOON </a></button>
                                </figcaption>
                            </div>
                        </div>


                        {/* Project no 4*/}
                        <div className="project_item img-fluid col-sm-5 flex">

                            <div className="project_box">

                                <img src="/app/images/4th_app.jpg" alt=""
                                     className="img-fluid project_image"/>

                                <figcaption className="project_inner_box flex" id='project_text'>
                                    <h2> Weather Application</h2>
                                    <button className="btn"><a href='https://codewave.com.pl/error/'
                                                               target="blank"> AVAILABLE SOON </a></button>
                                </figcaption>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        );
         }
        }

export default Projects;


{/*<div className="project_item img-fluid col-sm-5 flex" onMouseOver={this.showDescription_1}*/}
     {/*onMouseOut={this.hideDescription_1}>*/}
    {/*{*/}
        {/*this.state.showProjectDesc &&*/}

        {/*<div className="desc_text">*/}
            {/*<h2> Meditation Assistant</h2>*/}
            {/*<button className="btn"><a href='https://codewave.com.pl/meditation_app/' target="blank"> SEE MORE </a>*/}
            {/*</button>*/}

        {/*</div>*/}
    {/*}*/}

{/*</div>*/}

