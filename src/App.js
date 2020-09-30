  
import React, { Component, useState, useEffect } from 'react';
import Login from './components/Login';
import firebase from 'firebase'
import { useMediaQuery } from 'react-responsive'
import fire from './config/Fire';
import { BrowserRouter, Route} from 'react-router-dom';
import Stock from './components/Stock';
import SiderDemo from './components/SiderDemo';

class App extends Component {

  constructor(props) {

    super(props);
    this.state = {
      user: {}

    }
  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }

    })
  }



  render() {

    if(this.state.user == null)
    {
      return(

        <div>
        <Login />   
        </div>

      );
    }
  
    return (

      <div>
        <BrowserRouter>
          <Route exact path="/" component={SiderDemo} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </div>

    );

  }
}


export default App;