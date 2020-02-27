import React from 'react';
import './login.styles.scss';
import { Link } from 'react-router-dom';

import CustomButton from '../customButton/customButton.component'

import {auth} from '../../firebase/firebase.utils';

import { withRouter } from "react-router-dom";



class Login  extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handelSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
            this.props.history.push('/home');
        } catch (error) {
            alert(`${error}`)
            console.log(error);
            
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value})
    }

    render(){
        return  (
            <div className="login-page">
                <h4 className="title">Glad to see you! </h4>
        
                <div className="row">
                    <form className="col s12" onSubmit={this.handelSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="email" autoComplete="new-email" value={this.state.email} placeholder="Email" name="email" onChange={this.handleChange} />
                               
                            </div>
        
                            <div className="input-field col s12">
                                <input autoComplete="new-password" value={this.state.password} placeholder="Password" type="password" name="password" onChange={this.handleChange}/>
                                
                            </div>
        
                           
                            <CustomButton type="submit">Login</CustomButton>
                        </div>
                    </form>
        
                    <p className="link">New User? <Link to="/signup-form">Signup </Link> </p>
                </div>
        
            </div>
        );
    }

} 


export default withRouter(Login);

