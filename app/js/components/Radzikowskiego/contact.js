


https://www.w3schools.com/bootstrap4/bootstrap_forms_input_group.asp -> ikona przed inputami

{/* CONTACT FORM */}
<div className='row '>


    {/* Navigation div*/}
    <div className='contact_section'></div>


    <div className='img-fluid contact_pic col'>


        <div className="contact_header">

            <h1> Kontakt </h1>
        </div>


        <form id="contact-form" method='post' role="form" action= 'contact.php'>

            <div className="messages"> </div>

            <div className="controls pt-5">

                <div className="row">

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="form_name"> </label>
                            <input id="form_name" type="text" name="name"
                                   className="form-control"
                                   placeholder='Imię i Nazwisko'
                                   required="required" data-error="Imię jest wymagane"> </input>
                            <div className="help-block with-errors"> </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="form_email"> </label>
                            <input id="form_email" type="email" name="email"
                                   className="form-control"
                                   placeholder="Adres E-mail " required="required"
                                   data-error="Valid email is required."> </input>
                            <div className="help-block with-errors"> </div>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="form_message"> </label>
                            <textarea id="form_message" name="message" className="form-control"
                                      placeholder="Wiadomość" rows="4"
                                      required="required"
                                      data-error="Please, leave us a message.">Wiadomość </textarea>
                            <div className="help-block with-errors"> </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <input type="submit" className="btn btn-success btn-send"
                               value="Wyślij wiadomość"> </input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-muted">
                            <strong>*</strong> Pola wymagane </p>
                    </div>
                </div>
            </div>

        </form>

        <div className='col-12 '>
            <button className='home_arrow' onClick ={this.scrollToFirst}><img src='/app/images/home_arrow.png'/></button>
        </div>

    </div>

</div>
