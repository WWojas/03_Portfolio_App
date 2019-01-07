import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            screenWidth: window.innerWidth,

            //showing/hiding menus
            toggleDisplayLogIn: 'none',
            toggleDisplaySignUp: 'none',
            isUserLoggedIn: false,
            showMyAccount: 'none',
            displayMobileMenu: 'none',

            displaySignUpNav: 'block',


            // default input values
            password: '',
            username: '',
            email: '',

            // ERROR boxes //
            showUsernameSignUpError: 'none',
            showPasswordSignUpError: 'none',
            showEmailSignUpError: 'none',
            showLoginErrorBox: 'none',

            // showing user pannel
            showLoginPanel: 'block',
            showAccountOptions: 'none',
            userStatsDisplay: 'none',
            userStatsInfo: [],

            // Props for passing from Header to Body
            response: '',
            // Callback

            checkUserLogin: '',


            // empty array for storing fetched user data
            sessions: [],

        }
    };

                                                // DESKTOP & MOBILE Functionalities


// JSON Server


    // SIGN UP
    signUp = () => {
        if (this.state.toggleDisplaySignUp === 'none') {
            this.setState({
                password: '',
                username: '',
                email: '',
                toggleDisplaySignUp: 'block',
                toggleDisplayLogIn: 'none',
                displayMobileMenu: 'none'


            })
        } else {
            this.setState({
                password: '',
                username: '',
                email: '',
                toggleDisplaySignUp: 'none',
                displayMobileMenu: 'block'
            })
        }
    };


    // SET NEW USER NAME, EMAIL AND PASSWORD
    typeName = (event) => {
        this.setState({
            username: event.target.value,
            showUsernameSignUpError: 'none'
        })
    };

    typeMail = (event) => {
        this.setState({
            email: event.target.value,
            showEmailSignUpError: 'none'

        })
    };


    typePassword = (event) => {
        this.setState({
            password: event.target.value,
            showPasswordSignUpError: 'none'
        })
    };


    //  SIGN UP Box
    addUser = (event) => {
        event.preventDefault();

        if (this.state.username.length < 9) {
            this.setState ({
                showUsernameSignUpError: 'block'
            })

        } else if ((this.state.email.length < 7) || (this.state.email.indexOf('@') === -1)) {
            this.setState ({
                showEmailSignUpError: 'block'
            })
        }

        else if ( this.state.password.length < 7) {
            this.setState({
                showPasswordSignUpError: 'block'
            })
        }

        else {

            fetch('http://localhost:3000/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify({
                    'username': this.state.username,

                    'email': this.state.email,

                    'password': this.state.password
                })
            }).then(() => {

                this.setState({
                    toggleDisplaySignUp: 'none'
                })
            })}

    };



    // LOG IN Box
    logIn = () => {
        if (this.state.toggleDisplayLogIn === 'none') {
            this.setState({
                password: '',
                username: '',
                email: '',
                toggleDisplayLogIn: 'block',
                toggleDisplaySignUp: 'none',
                showMyAccount: 'none',
                displayMobileMenu: 'none'

            })
        } else {
            this.setState({
                password: '',
                username: '',
                email: '',

                showMyAccount: 'block',
                displayMobileMenu: 'block',
                toggleDisplaySignUp: 'none',
                toggleDisplayLogIn: 'none',


            })
        }
    };


    // VALIDATE LOGIN DATA
    checkUser = (event) => {
        event.preventDefault();

        fetch(`http://localhost:3000/users?email=${this.state.email}&password=${this.state.password}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },

        }).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(response => {

            if ((response[0].email === this.state.email) && (response[0].password === this.state.password)) {

                this.props.changeResponse(response);

                this.setState({
                    showLoginPanel: 'none',
                    response: response,
                    toggleDisplayLogIn: 'none',
                    toggleDisplaySignUp: 'none',


                    displaySignUpNav: 'none',

                    showMyAccount: 'block',
                    isUserLoggedIn: true,

                });

                // Callback from Homepage
                this.props.checkUserLogin(this.state.isUserLoggedIn)
            }

        }).catch(() => {
            this.setState ({
                showLoginErrorBox: 'block'
            })
        });



    };




    // SHOW My Account Box

    openAccountOptions = () => {

        if (this.state.showAccountOptions === 'none') {

            this.setState({
                showAccountOptions: 'block',
                displayMobileMenu: 'none'

            })
        } else if (this.state.showAccountOptions === 'block') {

            this.setState({
                showAccountOptions: 'none'
            })
        }
    };


    // LOG OUT USER

    userLogOut = () => {
        this.setState({
            isUserLoggedIn: false,
            showLoginPanel: 'block',
            showMyAccount: 'none',
            displaySignUpNav: 'block',
            email: '',
            password: '',
            username: ''


        })
    };



    // SHOW USER STATISTICS

    showStatistics = () => {

        this.setState({
            userStatsDisplay: 'block',
            showAccountOptions: 'none',
            displayMobileMenu: 'none'

        }, () => {


            fetch(`http://localhost:3000/statistics?userID=${this.state.response[0].id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },

            }).then(response => {
                if (response.ok) {
                    return response.json();
                }
            }).then(response => {

                this.setState({
                    sessions: response,

                })
            })
        })

    };




                                                // ------------ //
                                                   // DESKTOP //
                                                // -------------//


    // Desktop Header

    generateDesktopHeader () {
        return (


            <div className="header_top">

                <ul>
                    <div className="container">
                    <li><em> Zen Assistant </em></li>
                    <li> Meditation Music</li>
                    <li> Timer </li>


                    { this.generateDesktopSignUp ()}

                    { this.generateDesktopLogIn () }

                    { this.generateMyAccountDesktop() }


                    <li> About </li>
                    </div>
                </ul>

            </div>

        )

    }


    // Desktop MyAccount

    generateMyAccountDesktop () {
        if (this.state.isUserLoggedIn === true) {
            return (

                <div>
                <li  style={{ display: this.state.showMyAccount }}>
                    <span onClick={this.openAccountOptions} >  My Account </span>

                    <div className="myAccount" style={{ display: this.state.showAccountOptions }} >


                        <div className="myAccountButtons">

                            <h1> Welcome, {this.state.response[0].username} </h1>
                        <button onClick={this.showStatistics}> My Statistics </button>


                        <button> My Groups </button>
                        <button> Publish </button>
                        <button onClick={this.userLogOut}> Log Out </button>
                        </div>

                    </div>
                </li>

                </div>



            )
        }
    }

    generateMyStatsBoxDesktop () {

        if (this.state.isUserLoggedIn === true) {
            return (

                <div className="userStatsBox" style={{display: this.state.userStatsDisplay}} id="scrollbarStyle">

                    <div className="closeSummary" onClick={this.closeSummary}><img src='./images/close_box.png'/>
                    </div>

                    <table className="stats_table">
                        <thead>
                        <tr>
                            <h2> {this.state.response[0].username} </h2>
                            <h2> Session Summary </h2>
                            <p><em> "The secret of getting ahead is getting started" -
                                <strong>Mark Twain</strong></em></p>

                        </tr>
                        </thead>

                        <tbody>

                        {
                            this.state.sessions.map((element) => {

                                return <tr>
                                    <td>
                                        {element.date}
                                    </td>
                                    <td>
                                        {element.duration} min
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>


            )
        }

    }

    // Close Summary Box

    closeSummary = () => {
        this.setState ({
            userStatsDisplay: 'none',
            showAccountOptions: 'none',
            displayMobileMenu: 'none'
        })
    };

    // Desktop LogIn Box

    generateDesktopLogIn () {
        return (
                    <li style={{ display: this.state.showLoginPanel }}>
                        <span onClick={this.logIn}> <a name ="LogIn"> Login </a></span>


            <div className="LogIn" style ={{ display: this.state.toggleDisplayLogIn }} >
                <form>
                    <div onClick={this.hideLogInBox} className="closeBox">
                        X
                    </div>
                    <h2> Already our Member? Log in now </h2>
                    <input onChange={this.typeMail} type='mail'
                           value={this.state.email}/> Email
                    <input onChange={this.typePassword} type='password'
                           value={this.state.password}/> Password
                    <button onClick={this.checkUser} type='submit'> LOG IN </button>

                    { this.generateLoginErrorBox () }

                </form>

            </div>

        </li>
        )
    }

    hideLogInBox = () => {
        this.setState({
            toggleDisplayLogIn: 'none'
        })
    };

    // Desktop LogIn Error Box

    generateLoginErrorBox() {
        return (
            <div className="showUserLoginError" style={{display: this.state.showLoginErrorBox}} onMouseMove={this.closeErrorBox}>
                <h2> We're sorry but ... </h2>
                <p> your <strong> email or password </strong> seem to be incorrect. </p>
            </div>

        )
    }


    // Hiding Error SignUp and LogIn Boxes on MouseMove
    closeErrorBox = () => {
        this.setState ({
            showLoginErrorBox: 'none',
            showUsernameSignUpError: 'none',
            showEmailSignUpError: 'none',
            showPasswordSignUpError: 'none'
        })
    };




   // Desktop SignUp

    generateDesktopSignUp () {
        return (
            <li style ={{ display: this.state.displaySignUpNav }}>
                <span onClick = {this.signUp}> Sign up </span>

                <div className="SignUp" style ={{ display: this.state.toggleDisplaySignUp }}>
                    <form>
                        <div onClick={this.hideSignUpBox} className="closeBox">
                            X
                        </div>
                        <h2> Interested in meditation? Come join our club </h2>
                        <input onChange={ this.typeName} type='text' value={this.state.username}/> Full name
                        <input onChange={ this.typeMail} type='mail' value={this.state.email}/> Email
                        <input onChange={ this.typePassword} type='password' value={this.state.password}/> Password
                        <button onClick={this.addUser} type='submit'> CREATE ACCOUNT </button>

                        { this.generateUsernameError () }

                        { this.generateEmailError () }

                        { this.generatePasswordError () }




                    </form>
                </div>
            </li>
        )
    }

    hideSignUpBox = () => {
        this.setState ({
            toggleDisplaySignUp: 'none'
        })
    };


    // Desktop SignUp Error Boxex

    generateUsernameError () {
        return (
            <div className="showUsernameSignUpError" style={{display: this.state.showUsernameSignUpError}} onMouseMove={this.closeErrorBox}>
                <h2> We're sorry but ... </h2>
                <p> your <strong> name </strong> must consist of at least 8 characters </p>
            </div>
        )
    };

    generateEmailError () {
        return (
            <div className="showEmailSignUpError" style={{display: this.state.showEmailSignUpError}} onMouseMove={this.closeErrorBox}>
                <h2> We're sorry but ... </h2>
                <p> your <strong> email </strong> must consist of at least 6 characters and contain <strong> @ </strong> </p>
            </div>
        )
    };


    generatePasswordError () {
        return (
            <div className="showPasswordSignUpError" style={{display: this.state.showPasswordSignUpError}} onMouseMove={this.closeErrorBox}>
                <h2> We're sorry but ... </h2>
                <p> your <strong> password </strong> must consist of at least 6 characters </p>
            </div>
        )
    };






                                                        // -----------//

                                                        //    MOBILE  //

                                                        // -----------//





    // Mobile Header

    generateMobileHeader() {
        return (

            <div className="header_mobile">
                <div className="container">

                <ul className="mobile_logo">
                    <li><em> <a name ="LogIn"> Zen Assistant </a></em></li>
                </ul>

                <div className="mobile_bar">
                    <img src='./images/logo_mobile.png' onClick={this.toggleMobileMenu}/>


                    <ul className="mobile_burger" style={{display: this.state.displayMobileMenu}}>
                        <li><em> Zen Assistant </em></li>
                        <li> Meditation Music</li>
                        <li> Timer</li>

                        {/* SIGN UP Box - moved outside of UL  */}
                        <li>
                            <span onClick={this.signUp}> Sign up </span>
                        </li>


                        {/* LOG IN Box - moved outside of UL */}
                        <li style={{display: this.state.showLoginPanel}}>
                            <span onClick={this.logIn}>  Login </span>
                        </li>

                        {this.generateMobileMyAccount()}

                        <li> About</li>


                    </ul>
                    {this.generateMobileSignUp()}

                    {this.generateMobileLogIn()}

                </div>
                </div>
            </div>
        )
    }

    generateMyStatsMobile () {
        if (this.state.isUserLoggedIn === true) {
            return (
                <div className="myAccount" style={{display: this.state.showAccountOptions}}>

                    <p> Welcome, {this.state.response[0].username} </p>


                    <div className="myAccountButtons">

                        <button onClick={this.showStatistics}> My Statistics</button>

                        <button> My Groups</button>
                        <button> Publish</button>
                        <button onClick={this.userLogOut}> Log Out</button>
                    </div>
                </div>
            )
        }
    }



    // Mobile Menu

    toggleMobileMenu = () => {

        if (this.state.displayMobileMenu === 'none') {
            this.setState({
                displayMobileMenu: 'block',
                toggleDisplaySignUp: 'none',
                toggleDisplayLogIn: 'none',
            })
        } else if (this.state.displayMobileMenu === 'block') {
            this.setState({
                displayMobileMenu: 'none',
                toggleDisplayLogIn: 'none',
                toggleDisplaySignUp: 'none',
            })
        }
    };


    // Mobile SignUp Box

    generateMobileSignUp() {
        return (
            <div className="SignUp" style={{display: this.state.toggleDisplaySignUp}}>
                <form>
                    <div onClick={this.hideSignUpBox} className="closeBox">
                        X
                    </div>
                    <h2> Interested in meditation? Come join our club </h2>
                    <input onChange={this.typeName} type='text' value={this.state.username}/> Full name
                    <input onChange={this.typeMail} type='mail' value={this.state.email}/> Email
                    <input onChange={this.typePassword} type='password'
                           value={this.state.password}/> Password
                    <button onClick={this.addUser} type='submit'> CREATE ACCOUNT </button>

                    { this.generateUsernameError () }

                    { this.generateEmailError () }

                    { this.generatePasswordError () }

                </form>
            </div>
        )
    }

    hideSignUpBox = () => {
        this.setState ({
            toggleDisplaySignUp: 'none'
        })
    };


    // Mobile LogIn Box

    generateMobileLogIn() {
        return (
            <div className="LogIn" style ={{ display: this.state.toggleDisplayLogIn }} >

                <form>
                    <div onClick={this.hideLogInBox} className="closeBox">
                        X
                    </div>
                    <h2> Already our Member? Log in now </h2>
                    <input onChange={this.typeMail} type='mail'
                           value={this.state.email}/> Email
                    <input onChange={this.typePassword} type='password'
                           value={this.state.password}/> Password
                    <button onClick={this.checkUser} type='submit'> LOG IN </button>
                </form>

            </div>
        )
    }

    hideLogInBox = () => {
        this.setState({
            toggleDisplayLogIn: 'none'
        })
    };


    // Mobile MyAccount

    generateMobileMyAccount() {

        if (this.state.isUserLoggedIn === true) {

            return <li style={{display: this.state.showMyAccount}}>
                <span onClick={this.openAccountOptions}>  My Account </span>


            </li>

        }

    }

    generateMyStatsBoxMobile () {

        if (this.state.isUserLoggedIn === true) {
            return (

                <div className="userStatsBox" style={{display: this.state.userStatsDisplay}} id="scrollbarStyle">

                    <div className="closeSummary" onClick={this.closeSummary}><img src='./images/close_box.png'/>
                    </div>

                    <table className="stats_table">
                        <thead>
                        <tr>
                            <h2> {this.state.response[0].username} </h2>
                            <h2> Session Summary </h2>
                            <p><em> "The secret of getting ahead is getting started" -
                                <strong>Mark Twain</strong></em></p>

                        </tr>
                        </thead>

                        <tbody>

                        {
                            this.state.sessions.map((element) => {

                                return <tr>
                                    <td>

                                        {element.date_mobile}

                                    </td>
                                    <td>
                                        {element.duration} min
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>


            )
        }

    }



// Rendering all elements
    render() {



        return (


             <div>


                <header>

                    {/* MOBILE Section */}
                    { this.generateMobileHeader () }

                    { window.matchMedia("(max-width: 320px)").matches && this.generateMyStatsBoxMobile ()}


                    {/* DESKTOP Section*/}
                    { this.generateDesktopHeader () }

                    { window.matchMedia("(max-width: 720px)").matches && this.generateMyStatsMobile() }

                    { window.matchMedia("(min-width: 321px)").matches && this.generateMyStatsBoxDesktop () }



                    {/* Bottom part of Header */}
                    <div className="header_bottom">
                        <div className="container">

                        <div className="header_picture_text">
                            <img src='./images/Icon.jpg'/>

                            <h1> Improve Your Meditation Today</h1>
                            <p> Zen Assistant connects over 15.000 people daily on their journey to meditation mastery.</p>

                            <p>  Come join us and experience the deep potential of combining your internal focus

                                with our professional set of chakra empowering soundwaves. </p>
                        </div>
                        </div>
                    </div>

                </header>

            </div>

        );
    }
}

export default Header;