import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class Home extends Component {



    scrollToFirst =() => {
        let first_section= document.querySelector('.first_section');

        first_section.scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'});

    };

    scrollToSecond =() => {
        let second_section= document.querySelector('.second_section');

        second_section.scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'});

    };

    scrollToThird = () => {
        let third_section= document.querySelector('.third_section');

        third_section.scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'});
    };

    scrollToContact = () => {
        let contact_section= document.querySelector('.contact_section');

        contact_section.scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'});
    };

    scrollToAbout = () => {
        let about_section= document.querySelector('.about_section');

        about_section.scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'});
    };



    render() {
        return (
            <div>

                <div className='container-fluid'>


                    {/* NAVBAR */}

                    <header>
                        <nav className="navbar navbar-dark bg-primary navbar-expand-md">

                            <a className='navbar_brand m-sm-1 ' href='#'><img src="/app/images/Logo-2.png" width='40' height='40'
                                                                              className="d-inline-block align-bottom" alt='przedszkole krakowiaczek'/> Krakowiaczek</a>

                            <button className='navbar-toggler' type='button'
                                    data-toggle='collapse' data-target='#mobile_nav_menu'>
                            <span className='navbar-toggler-icon'>
                            </span>
                            </button>

                            <div className='collapse navbar-collapse ' id='mobile_nav_menu'>
                                <ul className="navbar-nav mr-lg-1">

                                    <li className="nav-item dropdown  ">
                                        <a className="nav-link dropdown-toggle text-center" data-toggle="dropdown" role='button' > Placówki </a>

                                        <div className="dropdown-menu bg-primary">
                                       <NavLink to ="/reja" className='dropdown-item'> ul. Reja 13 </NavLink>
                                       <NavLink to ="/radzikowskiego" className='dropdown-item'> ul. Radzikowskiego 92 </NavLink>
                                        </div>
                                    </li>

                                    <li className="nav-item"> <a href='#about' className="nav-link"> O Nas </a></li>
                                    <li className="nav-item"> <a href='#contact_section' className="nav-link"> Kontakt </a></li>

                                </ul>
                            </div>


                        </nav>
                    </header>


                    {/* HOME */}


                    {/* 1st row with logo and first screen*/}
                    <div className='row viewport_height_main'>
                        <div className='main_pic'>
                        <div className='first_section'> </div>

                        <div className='col-6 nav header_text'>
                            <h1 id="section_no1"> Publiczne Przedszkole Krakowiaczek</h1>
                        </div>

                        <div className="bottom_nav">
                            <div className='col-12 nav header_text '>
                                <button className='header_button'><h2> Nasze Placówki</h2></button>
                            </div>

                            {/* Down navigation arrow*/}
                            <div className='col-12 nav header_text '>
                                <button className='header_arrow down_arrow' onClick ={this.scrollToSecond}><img src='/app/images/down-arrow.gif'/></button>
                            </div>
                        </div>
                        </div>
                    </div>



                    {/* REJA */}

                    <div className='row '>

                        {/* Navigation div*/}
                        <div className='second_section'></div>

                        <div className='img-fluid left_pic col-12 col-sm-6'>

                            {/* Up navigation arrow*/}
                            <div className='col-12 nav header_text '>
                                <button className='header_arrow up_arrow' onClick={this.scrollToFirst}><img src='/app/images/down-arrow.gif'/></button>
                            </div>

                            <div className='text-content viewport_height'>

                                <div className='inner_text_box viewport_height'>
                                    <h1> Przedszkole Krakowiaczek </h1>
                                    <hr/>
                                    <h1> ul. Mikołaja Reja 13 </h1>
                                    <button className='header_button'><h1><NavLink to ="/reja"> Strona Placówki </NavLink></h1></button>
                                </div>
                                {/*Down navigation arrow*/}
                                <div className='col-12 nav header_text '>
                                    <button className='header_arrow down_arrow' onClick ={this.scrollToThird}><img src='/app/images/down-arrow.gif'/></button>
                                </div>
                            </div>

                        </div>



                        {/* RADZIKOWSKIEGO */}


                        <div className='img-fluid right_pic col-12 col-sm-6'>


                            {/*Up navigation arrow*/}
                            <div className='col-12 nav header_text '>



                                <button className='header_arrow up_arrow' onClick={this.scrollToSecond}><img src='/app/images/down-arrow.gif'/></button>
                            </div>

                            <div className='text-content viewport_height'>


                                <div className='inner_text_box viewport_height third_section'>

                                    <h1> Przedszkole Krakowiaczek </h1>
                                    <hr/>
                                    <h1> ul. Eljasza Radzikowskiego 92 </h1>
                                    <button className='header_button'><h1><NavLink to ="/radzikowskiego"> Strona Placówki </NavLink></h1></button>
                                </div>


                                {/*Down navigation arrow*/}
                                <div className='col-12 nav header_text '>
                                    <button className='header_arrow down_arrow' onClick ={this.scrollToAbout}><img src='/app/images/down-arrow.gif'/></button>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* ABOUT US */}

                    <div className='row '>

                        {/* Navigation div*/}
                        <div className='about_section'></div>

                    <div className='img-fluid about_pic col-12 col-12'>


                        {/*Up navigation arrow*/}
                        <div className='col-12 nav header_text '>

                            <button className='header_arrow up_arrow' onClick={this.scrollToThird}><img src='/app/images/down-arrow.gif'/></button>
                        </div>

                        <div className='text-content viewport_height'>


                            <div className='inner_text_box viewport_height third_section'>

                                <h1> Nasz Zespół </h1>
                                <hr/>
                                <h5> Kadra dydaktyczna Przedszkola to zespół doświadczonych nauczycielek z wieloletnim stażem w zakresie nauczania przedszkolnego.</h5>
                                <h5> Nasi Pedagodzy dbają o prawidłowy rozwój dzieci zarówno w zakresie umysłowym, jak i emocjonalnym. </h5>

                            </div>


                            {/*Down navigation arrow*/}
                            <div className='col-12 nav header_text '>
                                <button className='header_arrow down_arrow' onClick ={this.scrollToContact}><img src='/app/images/down-arrow.gif'/></button>
                            </div>
                        </div>

                    </div>
                </div>


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

                </div>
            </div>



        )
    }
}

export default Home;