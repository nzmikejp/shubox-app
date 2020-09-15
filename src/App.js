import React, { Component } from 'react';
import { Router, Navigate, Link} from "@reach/router"
import RouteLogin from './RouteLogin'
import RouteSignup from './RouteSignup'
import RouteTypes from './RouteTypes'
import RouteListings from './RouteListings'
import RouteAddListing from './RouteAddListing'
import RouteUpdateListing from './RouteUpdateListing'
import Footer from './Footer'
import './assets/css/style.css';
import API from './API';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      hasFooter: true,
    }
  }

  render(){
    return (
      <div className="App">
        <main>
          <Router>
            <RouteLogin path="/users/authenticate"/>
            <RouteSignup path="users/create"/>
            <RouteTypes path="types"/>
            <RouteListings path="listings"/>
            <RouteAddListing path="listings/create"/>
            <RouteUpdateListing path="listings/:id/edit"/>
            <RouteLogin default/>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
