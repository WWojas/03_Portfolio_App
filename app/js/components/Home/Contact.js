import React from 'react';

class Contact extends React.Component{
    render() {
        return (
            <section id='contact'>


                <div className='row align-items-center'>

                    {/* Navigation div*/}
                    <div className='contact_section'></div>

                    <div className='img-fluid contact_pic col-12 justify-content-center'>


                        <div className="row">

                            <form className="col-12 col-sm-6 top_padding" id="contact-form" method='post' role="form"
                                  action='contact.php'>

                                <div className="row">
                                    <div className="section_contact flex">
                                        <h2> Contact <hr/></h2>
                                        <p> Have some questions? Want to get in touch?</p>

                                    </div>

                                </div>

                                <div className="messages"></div>

                                <div className="controls pt-5">

                                    <div className="row">

                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="form_name"> </label>
                                                <input id="form_name" type="text" name="name"
                                                       className="form-control"
                                                       placeholder='Name'
                                                       required="required" data-error="Name is required"/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="form_email"> </label>
                                                <input id="form_email" type="email" name="email"
                                                       className="form-control"
                                                       placeholder="E-mail " required="required"
                                                       data-error="Valid email is required."/>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="form_message"> </label>
                                                <textarea id="form_message" name="message" className="form-control"
                                                          placeholder="Message" rows="4"
                                                          required="required"
                                                          data-error="Please, leave us a message.">Your message </textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='row'>

                                        <div className="col">
                                            <input type="submit" className="btn btn-success btn-send"
                                                   value="Send message"/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <p className="text-muted">
                                            <strong>*</strong> Required </p>
                                    </div>

                                </div>

                            </form>
                        </div>
                        {/* arrow*/}
                        <div className="row">
                            <div className='col'>
                                <button className='home_arrow' onClick={this.scrollToFirst}><img
                                    src='/app/images/up_arrow.svg'/></button>
                            </div>

                        </div>
                    </div>
                </div>


            </section>
            );
         }
        }

export default Contact;