import React, { Component } from 'react';
import { Router} from "@reach/router"
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
            <RouteListings path="listings"/>
            <RouteAddListing path="listings/create"/>
            <RouteUpdateListing path="listings/:id/edit"/>
            <RouteListings default/>
          </Router>
          <Footer/>
        </main>
      </div>
    );
  }
}

export default App;
