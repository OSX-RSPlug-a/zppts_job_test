import React from 'react';
import { NavLink } from 'react-router-dom';


import './style-login.css';



export default function Login() {
    return (
    <>   
        <section className="login">

        <h3 className="title">Invision</h3>

        <h3 className="welc">Welcome to Invision</h3>

            <form action="index.html">

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

                        <h5>Password</h5>

                        <input type="password" className="input" required />

                    </section>
                </section>

                <a href="#top">Forgot Password?</a>

                <input type="submit" className="btn" value="Sign in" />

            </form>

            <hr />
        
            <a href="createLogin" className="btnG"><i class="fab fa-google"></i> Sign in with Google</a>

            <h6 className="create">New Invision? <NavLink to="/createLogin">Create accaunt</NavLink></h6>

        </section>

    </>
  );
}