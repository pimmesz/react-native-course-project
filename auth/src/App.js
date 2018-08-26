import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAbGe5bfo3nKb0wyjZSB1xOKGu55lcFIaY",
      authDomain: "auth-fa079.firebaseapp.com",
      databaseURL: "https://auth-fa079.firebaseio.com",
      projectId: "auth-fa079",
      storageBucket: "auth-fa079.appspot.com",
      messagingSenderId: "381783639329"
    });
  }

  render(){
    return(
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;
