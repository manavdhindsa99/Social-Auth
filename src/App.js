import React , { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey : "AIzaSyCtHb9DdIsA4RnBdDZ5TNZtPx0wdMNNUlI",
  authDomain :"fir-auth-3d539.firebaseapp.com"
})


class App extends Component{
  state = {isSignedIn : false}

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
     firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
          <div className="container">
            
          {this.state.isSignedIn ? (
            <span>
              <div>Successfully Signed In!</div>            
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <div><img
                alt="profile picture"
                src={firebase.auth().currentUser.photoURL}
              />
              </div>
              <button className="button" onClick={() => firebase.auth().signOut()}>Sign out !</button>
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </div>
    )
  }
}

export default App
