import React from 'react';
import './signup-form.styles.scss';
import {Link} from 'react-router-dom';
import CustomButton from '../customButton/customButton.component';



const SignUpForm = () => (
    <div className="signupform-page">
    <Link className="btn-floating  waves-effect waves-light" to="/" ><i class="material-icons">arrow_back</i></Link>

    <div className="form">
        <h4 className="title">Signup</h4>
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

                    <div className="input-field col s12">
                        <input id="icon_telephone" type="tel" className="validate"></input>
                        <label htmlFor="icon_telephone">Confirm password</label>
                    </div>

                   

                    <CustomButton>Create account</CustomButton>
                </div>
            </form>

            <p className="link">Already have an account? <span>Signin</span></p>
        </div>
    </div>
        
    </div>
     
    
);


export default SignUpForm;


