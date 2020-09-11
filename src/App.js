import React, { Component } from 'react';
import {Router, Link, navigate} from '@reach/router'
//import API from './API'

import RouteDescription from './RouteDescription'
import RouteHome from './RouteHome'
import RouteListingAdd from './RouteListingAdd'
import RouteListings from './RouteListings'
import RouuteListingUpdate from './RouteListingUpdate'

import './assets/css/style.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: null
    }
  }

  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        (This needs to sit within the footer)
        {
          currentUser? (<span>Welcome {currentUser.name}</span>) : null
        }
        



        {/* <Router>
          
          <RouteHome path="/" component={Home}/>
          <RouteDescription path="/" component={Description}/>
          <RouteListings path="/" component={Listings}/>
          <RouteListingAdd path="/" component={LisitingAdd}/>
          <RouteListingUpdate path="/" component={ListingUpdate}/>   
                 
        </Router> */}


      </div>
    );
  }
}

export default App;
