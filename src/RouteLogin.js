import React, { Component } from 'react'
import { navigate, Link } from '@reach/router'
import API from './API'

class RouteLogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            errorMessage: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form);
        var data = {
          username:formData.get('user-name'),
          password:formData.get('user-password'),
        }
    
        var {setCurrentUser} = this.props
    
        API.authenticate(data)
        .then(res => {
          var user = res.data
          return user
        })
        .then(user => {
          if(user){
            setCurrentUser(user)
            localStorage.setItem('userId',user.id)
            navigate('/types')
          }else{
            this.setState({errorMessage:'Wrong username or password, please try again'})
          }
        })
    
      }

    render(){
        return(
            <main>
                <section className="section route-user-login">
                    <div className="container">
                        <img src="/images/shu-logo-small.png" alt=""/>
                        <h1>Account Sign In</h1>
                        <hr className="divider"/>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}} className="pure-form pure-form-stacked">
                            <div className="form-group">
                                <label for="user-name">User Name:</label>
                                <input type="text" name="user-name" id="user-name" placeholder="Enter your username"/>
                            </div>
                            <div className="form-group">
                                <label for="user-password">Password:</label>
                                <input type="password" name="user-password" id="user-password" placeholder="Enter your password"/>
                            </div>
                            <div className="form-group with-btn">
                                <button type="submit" className="btn btn-gray">Sign in</button>
                                <Link to="/users/create" className="signup-link">dont’ have an account? no problem, sign up here</Link>
                            </div>
                            <p className="form-message">{this.state.errorMessage}</p>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteLogin