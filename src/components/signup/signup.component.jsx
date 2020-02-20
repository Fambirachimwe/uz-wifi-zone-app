import React from 'react';
import './signup.styles.scss';
import signup_img from '../../img/signup.svg';

import {Link} from 'react-router-dom';
import CustomButton from '../customButton/customButton.component';

// import { signInWithGoogle } from '../../firebase/firebase.utils';


const SignUp = () => (
    <div className="signup">
        <div className="layout">
            <p className="ca">Create an account</p>
            <h4 className="msg-banner">Fast and reliable <span>Wi-fi hotspot connection !</span></h4>
            <img src={signup_img} alt="sign up" className=""/>
            <Link to="/signup-form"> <CustomButton>signup</CustomButton> </Link>
            {/* <Link to="#"  onClick={signInWithGoogle}> <CustomButton >Signin with Google</CustomButton> </Link> */}

            {/* <CustomButton onClick={signInWithGoogle}>Signin with Google</CustomButton> */}
            <p className="terms">Terms of service</p>
        </div>
    </div>
);




export default SignUp