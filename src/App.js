import React, { Component } from 'react';
import { Router } from "@reach/router"
import RouteWelcome from './RouteWelcome'
import RouteLogin from './RouteLogin'
import RouteAddUser from './RouteAddUser'
import RouteTypes from './RouteTypes'
import RouteListings from './RouteListings'
import RouteListingDescription from './RouteListingDescription'
import RouteAddListing from './RouteAddListing'
import RouteUpdateListing from './RouteUpdateListing'
import RouteProfile from './RouteProfile'
import Footer from './Footer'
import './assets/css/style.css';
import API from './API';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="App">
          <Router>
            <RouteWelcome path="/"/>
            <RouteLogin path="users/authenticate"/>
            <RouteAddUser path="users/create"/>
            <RouteTypes path="types"/>
            <RouteListings path="listings"/>
            <RouteListingDescription path="listing/:id/description"/>
            <RouteAddListing path="listings/create"/>
            <RouteUpdateListing path="listings/:id/edit"/>
            <RouteProfile path="user/profile"/>
            <RouteWelcome default/>
          </Router>
          <Footer/>
      </div>
    );
  }
}

export default App;
