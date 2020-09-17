import React, { Component } from 'react';
import { Router, Match } from "@reach/router"
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
      currentUser: null
    }
  }

  setCurrentUser = (user) => {
    this.setState({currentUser:user})
  }

  componentDidMount(){


    //local storage
    var userId = localStorage.getItem('userId')
    if(userId){
      API.getSingleUser(userId).then(res => this.setState({currentUser:res.data}))
    }
  }

  render(){
    var footer = ['types', 'listings']
    var {currentUser} = this.state
    return (
      <div className="app">
        {/* <main> */}
          <Router>
            <RouteLogin setCurrentUser={this.setCurrentUser} path="/users/authenticate"/>
            <RouteSignup path="users/create"/>
            {currentUser ? <RouteTypes path="types" currentUser={currentUser} setCurrentUser={this.setCurrentUser}/> : null}
            {currentUser ? <RouteListings path="listings" currentUser={currentUser}/> : null}
            <RouteAddListing path="listings/create"/>
            <RouteUpdateListing path="listings/:id/edit"/>
            <RouteLogin default/>
          </Router>

          {
            footer.map(route => {
              return(
                <Match path={route}>
                  {props => 
                  props.match ? (
                    <Footer/>
                  ):null
                }
                </Match>
              )
            })
          }
        {/* </main> */}
      </div>
    );
  }
}

export default App;
