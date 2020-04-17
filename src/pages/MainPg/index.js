import React from 'react';


import './../../templates/style-mp.css';

import Logo from './../../assets/Data.png';

import Login from './../../templates/login';

import SlideText from './../../templates/textSlide';

export default function MainPg() {
  return (
    <>
        <div className="container">

            <div className="img">

                <img src={Logo} alt="Inside" />

                <section className="texteffect">

                    <SlideText />

                </section>

            </div>

            <div className="login-content">

                <Login />   
                
            </div>
        </div>

    </>
  );
}