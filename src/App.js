import React from 'react';
import SignUp from '../src/components/signup/signup.component';
import SignUpForm from '../src/components/signup-form/signup-form.component'
import AccountCreated from '../src/components/accountcreated/accountCreated.component';
import Login from  '../src/components/login/login.component';
import Homepage from '../src/components/Homepage/homepage.components';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';


import { BrowserRouter, Route } from 'react-router-dom';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          
          
        })
      } else{
        this.setState({currentUser: null})
      }
      
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (

      <BrowserRouter>
  
        <div className="App">
        
          <Route  exact path="/" component={SignUp}  />
  
          <Route path="/signup-form" component={SignUpForm} />
          <Route path="/thankyou" component={AccountCreated} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Homepage} />
  
          
        </div>
      </BrowserRouter>
  
    );
  }


  
}

export default App;
