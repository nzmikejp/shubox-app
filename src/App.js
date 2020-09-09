import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/css/style.css';

import RouteSignIn from './RouteSignIn'
import RouteSignUp from './RouteSignUp'
import RouteProfileUpdate from './RouteProfileUpdate'


class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
     
      
      <RouteProfileUpdate></RouteProfileUpdate>
    );
  }
}

export default App;
