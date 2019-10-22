import React, {Component} from 'react';

import Html_img from "../../../../images/author/html.svg";
import css from "../../../../images/author/css-3.svg";
import sass from "../../../../images/author/sass.svg";
import JS from "../../../../images/author/JS.svg";
import rwd from "../../../../images/author/rwd.svg";
import react from "../../../../images/author/react.svg";
import git from "../../../../images/author/git.svg";


class Technologies extends Component {
  render() {
      return (

          <div className='w-100 m-5'>
              <h2 className='text-center'> Technological Stack </h2>

              <div className="skill_wrapper">

                  <div className="skill_hex flex">
                      <img src={Html_img}/>
                      <span> HTML </span>
                  </div>
                  <div className="skill_hex flex">
                      <img src={css}/>
                      <span> CSS</span>
                  </div>

                  <div className="skill_hex flex">
                      <img src={sass}/>
                      <span> SASS </span>
                  </div>
              </div>


              <div className='skill_wrapper'>
                  <div className="skill_hex flex">
                      <img src={JS}/>
                      <span> JS (+ES6)</span>
                  </div>

                  <div className="skill_hex flex">
                      <img src={rwd}/>
                      <span> RWD </span>
                  </div>

                  <div className="skill_hex flex">
                      <img src={react}/>
                      <span> REACT </span>
                  </div>


              </div>

              <div className='skill_wrapper'>
                  <div className="skill_hex flex">
                      <img src={git}/>
                      <span> GIT </span>
                  </div>
              </div>

          </div>
      )


  }

}

export default Technologies


