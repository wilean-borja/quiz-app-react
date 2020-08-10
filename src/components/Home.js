import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import { FaBiohazard } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet><title>COVID-19 Quiz App</title></Helmet>
            <div id="home">
                <section>
                    <div style={{textAlign:'center'}}>
                        <FaBiohazard className="biohazard" size='25rem'/>
                    </div>
                    <h1>COVID-19 Quiz App</h1>
                    <div className="play-button-container">
                        <ul>
                            <li><Link className="play-button" to="/play/instructions">Play</Link></li>
                        </ul>
                    </div>
                    <div className="auth-container">
                        <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                        <Link to="/register" className="auth-buttons" id="signup-button">Sign Up</Link>
                    </div>
                </section>
            </div>
    </Fragment>
);




export default Home;