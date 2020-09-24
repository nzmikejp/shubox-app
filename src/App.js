import React, {Component} from 'react';
import {Router, navigate, Location} from "@reach/router"
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
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Footer from './Footer'
import './assets/css/style.css';
import API from './API';

const FadeTransitionRouter = props => (
  <Location>
    {({location}) => (
      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames="move" timeout={500}>
          <Router location={location} className="router">
            {props.children}
          </Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
)

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentUser: null
    }
  }

  setCurrentUser = (user) => {
    this.setState({currentUser: user})
  }

  componentDidMount(){
    this.loadCurrentUser()
  }

  loadCurrentUser = () =>{
    var userId = localStorage.getItem('userId')
    if(userId){
      API.getSingleUser(userId).then(res => this.setState({currentUser:res.data}))
    }
  }

  handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('userId')
    this.setState({currentUser: null})
    navigate('/')
  }

  render(){
    var footerlessRoutes = ['/','/users/authenticate','/users/create']
    var {currentUser} = this.state

    return (
      <div className="App">
        <FadeTransitionRouter>
          <RouteWelcome path="/" />
          <RouteLogin path="users/authenticate" setCurrentUser={this.setCurrentUser} />
          <RouteAddUser path="users/create" setCurrentUser={this.setCurrentUser} />
          <RouteTypes path="types" />
          <RouteSingleType path="types/:id" />
          <RouteListings path="listings" />
          <RouteListingDescription path="listing/:id/description" currentUser={currentUser} loadCurrentUser={this.loadCurrentUser} />
          {currentUser ? <RouteAddListing path="listings/create" currentUser={currentUser} loadCurrentUser={this.loadCurrentUser} /> : null}
          {currentUser ? <RouteUpdateListing path="listings/:id/edit" loadCurrentUser={this.loadCurrentUser} /> : null}
          {currentUser ? <RouteProfile path="user/profile" currentUser={currentUser} loadCurrentUser={this.loadCurrentUser} /> : null}
          {currentUser ? <RouteUpdateUser path="users/:id/edit" handleLogout={this.handleLogout} loadCurrentUser={this.loadCurrentUser} setCurrentUser={this.setCurrentUser} /> : null}
          <RouteWelcome default />
        </FadeTransitionRouter>
        <Location>
          {({location}) => (
            <Footer currentUser={currentUser} active={!footerlessRoutes.includes(location.pathname)}/>
          )}
        </Location> 
      </div>
    );
  }
}

export default App;
