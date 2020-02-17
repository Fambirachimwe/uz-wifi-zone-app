import React from 'react';
import './login.styles.scss';
import { Link } from 'react-router-dom';

import CustomButton from '../customButton/customButton.component'


const Login = () => (
    <div className="login-page">
        <h4 className="title">Glad to see you! </h4>

        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="icon_prefix" type="text" className="validate"></input>
                        <label htmlFor="icon_prefix">Email</label>
                    </div>

                    <div className="input-field col s12">
                        <input id="icon_telephone" type="tel" className="validate"></input>
                        <label htmlFor="icon_telephone">Password</label>
                    </div>

                   
                    <CustomButton>Login</CustomButton>
                </div>
            </form>

            <p className="link">New User? <Link to="/signup-form">Signup </Link> </p>
        </div>

    </div>
);


export default Login;

