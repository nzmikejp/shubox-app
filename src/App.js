import React, { Component } from 'react';
import { Router, Match } from "@reach/router"
import RouteWelcome from './RouteWelcome'
import RouteLogin from './RouteLogin'
import RouteAddUser from './RouteAddUser'
import RouteTypes from './RouteTypes'
import RouteSingleType from './RouteSingleType'
import RouteListings from './RouteListings'
import RouteListingDescription from './RouteListingDescription'
import RouteAddListing from './RouteAddListing'
import RouteUpdateListing from './RouteUpdateListing'
import RouteProfile from './RouteProfile'
import RouteUpdateUser from './RouteUpdateUser'
import Footer from './Footer'
import './assets/css/style.css';
import API from './API';

class App extends Component {

  render(){
    var footerRoutes = ['types', 'listings', 'listing/:id/description', 'listings/create', 'listings/:id/edit', 'user/profile', 'users/:id/edit', 'types/:id']

    return (
      <div className="App">
        <Router>
          <RouteWelcome path="/" />
          <RouteLogin path="users/authenticate" />
          <RouteAddUser path="users/create" />
          <RouteTypes path="types" />
          <RouteSingleType path="types/:id" />
          <RouteListings path="listings" />
          <RouteListingDescription path="listing/:id/description" />
          <RouteAddListing path="listings/create" />
          <RouteUpdateListing path="listings/:id/edit" />
          <RouteProfile path="user/profile" />
          <RouteUpdateUser path="users/:id/edit" />
          <RouteWelcome default />
        </Router>
        {
          footerRoutes.map(route => {
            return (
              <Match path={route}>
                {props =>
                  props.match ? (
                    <Footer />
                  ) : null
                }
                </Match>
              )
            })
          }
      </div>
    );
  }
}

export default App;
