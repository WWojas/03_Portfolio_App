import React from 'react';

class Projects extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
             showProjectDesc: false
        }
    }

    showDescription_1 = () => {
         this.setState ({
             showProjectDesc: true
         })
    }

    hideDescription_1 = () => {
        this.setState ({
            showProjectDesc: false
        })
    }


    render() {
        return (
            <section id='projects'>

                <div className="container_1200">
                    <div className="row flex">
                        <div className="section_header"> Projects <hr/></div>
                    </div>


                    <div className="row projects_box justify-content-center">

                        {/* project no 1 */}
                        <div className="project_item col-sm-5">

                            <div className="project_test img-fluid" onMouseOver={this.showDescription_1} onMouseOut={this.hideDescription_1}/>

                            {
                                this.state.showProjectDesc &&

                                <div className="desc_text">
                                    <h2> Meditation Assistant</h2>
                                    <p> DETAILS</p>

                                </div>
                                        }


                        </div>

                        <div className="project_item col-sm-5">


                            <img src='/app/images/Meditation_assistant.png' className="img-fluid" onMouseOver={this.showDescription} onMouseOut={this.hideDescription}/>

                            {
                                this.state.showProjectDesc &&

                                <div className="desc_text">
                                    <h2> Meditation Assistant</h2>
                                    <p> DETAILS</p>

                                </div>
                            }


                        </div>

                        <div className="project_item col-sm-5">


                            <img src='/app/images/Meditation_assistant.png' className="img-fluid" onMouseOver={this.showDescription} onMouseOut={this.hideDescription}/>

                            {
                                this.state.showProjectDesc &&

                                <div className="desc_text">
                                    <h2> Meditation Assistant</h2>
                                    <p> DETAILS</p>

                                </div>
                            }


                        </div>
                        <div className="project_item col-sm-5">


                            <img src='/app/images/Meditation_assistant.png' className="img-fluid" onMouseOver={this.showDescription} onMouseOut={this.hideDescription}/>

                            {
                                this.state.showProjectDesc &&

                                <div class="desc_text">
                                    <h2> Meditation Assistant</h2>
                                    <p> DETAILS</p>

                                </div>
                            }


                        </div>

















                        {/* project no 2 */}
                        {/*<div className="project_item col-sm-5 ">*/}
                            {/*<img src='/app/images/Meditation_assistant.png' className="img-fluid"/>*/}
                        {/*</div>*/}

                        {/* project no 3*/}
                        {/*<div className="project_item col-sm-5">*/}
                            {/*<img src='/app/images/Meditation_assistant.png' className="img-fluid"/>*/}
                        {/*</div>*/}

                        {/* project no 4*/}
                        {/*<div className="project_item col-sm-5">*/}
                            {/*<img src='/app/images/Meditation_assistant.png' className="img-fluid"/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

        );
         }
        }

export default Projects;