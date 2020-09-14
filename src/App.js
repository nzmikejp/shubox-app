import React, { Component } from 'react';
import { Router, Navigate, Link} from "@reach/router"
import RouteListings from './RouteListings'
import RouteAddListing from './RouteAddListing'
import RouteUpdateListing from './RouteUpdateListing'
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
        <main>
          <Router>
            <RouteLogin path="/users/authenticate"/>
            <RouteSignup path="user/create"/>
            <RouteListings path="listings"/>
            <RouteAddListing path="listings/create"/>
            <RouteUpdateListing path="listings/:id/edit"/>
            <RouteLogin default/>
          </Router>
          <Footer/>
        </main>
      </div>
    );
  }
}

export default App;
