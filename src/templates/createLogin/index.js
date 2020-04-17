import React from 'react';
import { NavLink } from 'react-router-dom';

import './../login/style-login.css';



export default function CreateLogin() {
    return (
    <>   
        <section className="login">

        <h3 className="title">Invision</h3>

        <h3 className="welc">Gettin Started</h3>

            <form action="index.html">

                <section className="input-div one">

                    <div className="i">

                            <i className="fas fa-user"></i>

                    </div>

                    <section className="div">

                            <h5>Full name</h5>

                            <input type="text" className="input" required />

                    </section>
                </section>

                <section className="input-div one">

                    <div className="i">

                            <i className="fas fa-user"></i>

                    </div>

                    <section className="div">

                            <h5>Username</h5>

                            <input type="text" className="input" required />

                    </section>
                </section>

                <section className="input-div pass">

                    <div className="i">

                        <i className="fas fa-lock"></i>

                    </div>

                    <section className="div">

                        <h5>Create Password</h5>

                        <input type="password" className="input" required />

                    </section>
                </section>

            <input type="submit" className="btn" value="Sign up" />

            </form>

            <hr />
        
            <section className="bottom-form">

                <a href="createLogin" className="btnG"><i class="fab fa-google"></i> Sign in with Google</a>

                <h6>By signing up you agree <a href="#top">Terms of conditions</a> and <a href="#top">Privacy Policy</a></h6>

                <h6>Already on Invision? Go back to <NavLink to="/">Log in</NavLink></h6>

            </section>

        </section>

    </>
  );
}
