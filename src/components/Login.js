import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import fire from "../config/Fire";
import './Login.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";


class Login extends Component{
    constructor(props){
        super(props)
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.signup = this.signup.bind(this)
        this.state = {

            email: "",
            password: "",
            isSignedIn: false

        }
    }
    
  uiConfig = {

  signInFlow: "popup",
  signInOptions: [

      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      
  ],

  callback: {

      signInSuccess: () => false
  }
}

 componentDidMount () {



  firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
  })
}

    login(e) {

        e.preventDefault()

        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChange(e){

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    signup(e){

        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

            console.log(u)
        }).catch((err) => {
            console.log(err)
        })

    }

    render(){
  return (
    <div className="back">
        <div className="box">
    <MDBContainer style={{display: 'flex' , justifyContent: 'center'}}>
      <MDBRow>
        <MDBCol md="50">
          <MDBCard>
            <MDBCardBody className="body black rounded">
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-12">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                Your email
              </label>
              <input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              />
              <div className="text-center mt-4">
                <MDBBtn color="light-blue" className="mb-3" type="submit" onClick={this.login}>
                  Login
                </MDBBtn>
                <MDBBtn color="light-blue" className="mb-3" type="submit" onClick={this.signup}>
                  Signup
                </MDBBtn>
              </div>
              <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </div>
    
  );
};
}
export default Login;