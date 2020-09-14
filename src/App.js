import React, { Component } from 'react';
import { Router, Navigate, Link} from "@reach/router"
import RouteLogin from './RouteLogin'
import RouteSignup from './RouteSignup'
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
      hasFooter: false,
    }
  }

  setHasFooter = (state) => {
    this.setState({hasFooter:state})
  }

  render(){
    return (
      <div className="App">
        <main>
          <Footer>
          <Router>
            <RouteLogin setHasFooter={this.setHasFooter} path="/users/authenticate"/>
            <RouteSignup path="users/create"/>
            <RouteListings path="listings"/>
            <RouteAddListing path="listings/create"/>
            <RouteUpdateListing path="listings/:id/edit"/>
            <RouteLogin default/>
          </Router>
          {hasFooter ? (<Footer/>) : null}
          </Footer>
          
        </main>
      </div>
    );
  }
}

export default App;
