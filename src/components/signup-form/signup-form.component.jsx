import React from 'react';
import './signup-form.styles.scss';
import { Link } from 'react-router-dom';
import CustomButton from '../customButton/customButton.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { withRouter } from "react-router-dom";



class SignUpForm extends React.Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = async event => {
        event.preventDefault();
        const {email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try {
            
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {email});
            this.setState({
                email: '',
                password: '',
                confirmPassword: ''
            });
            this.props.history.push('/login');

        } catch (error) {
            console.log(error);  
        }

    }


    handleChange = event => {
        const { name, value} = event.target;

        this.setState({[name]: value})
    }




    render() {

        // const {email, password, confirmPassword} = this.state;

        return (

            <div className="signupform-page">
                <Link className="btn-floating  waves-effect waves-light" to="/" ><i className="material-icons">arrow_back</i></Link>

                <div className="form">
                    <h4 className="title">Signup</h4>
                    <div className="row">
                        <form className="col s12" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input  type="email" name="email"  placeholder="Email" autoComplete="new-email"  value={this.state.email} onChange={this.handleChange} />
                                   
                                </div>

                                <div className="input-field col s12">
                                    <input  type="password" name="password" placeholder="password" autoComplete="new-password" value={this.state.password}  onChange={this.handleChange} />
                                  
                                </div>

                                <div className="input-field col s12">
                                    <input  type="password" name="confirmPassword" placeholder="Confirm Password" autoComplete="confirm-password" value={this.state.confirmPassword}  onChange={this.handleChange} />
                                    
                                </div>



                                <CustomButton type="submit">Create account</CustomButton>
                            </div>
                        </form>

                        <p className="link">Already have an account? <span>Signin</span></p>
                    </div>
                </div>

            </div>


        );
    }
}


export default withRouter(SignUpForm);


