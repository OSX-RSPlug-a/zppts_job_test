import React from 'react';


import './../../templates/style-mp.css';

import Logo from './../../assets/Data.png';

import LoginCreate from './../../templates/createLogin';

import SlideText from './../../templates/textSlide';

export default function CreateLogin() {
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

                <LoginCreate />   
                
            </div>
        </div>

    </>
  );
}