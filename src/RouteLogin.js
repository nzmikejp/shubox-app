import React, { Component } from 'react'
import { Link } from '@reach/router'

class RouteLogin extends Component {
    render(){
        return(
            <main>
                <section className="section route-user-login">
                    <div className="container">
                        <img src="./assets/images/shu-logo-small.png" alt="" />
                        <h1>Account Sign In</h1>
                        <hr className="divider"/>
                        <form action="#" className="pure-form pure-form-stacked">
                            <div className="form-group">
                                <label htmlFor="user-name">User Name:</label>
                                <input type="text" name="user-name" id="user-name" placeholder="Enter your username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-password">Password:</label>
                                <input type="password" name="user-password" id="user-password" placeholder="Enter your password"/>
                            </div>
                            <div className="form-group with-btn">
                                <button type="submit" className="btn btn-gray">Sign in</button>
                                <Link to="/users/create" className="signup-link">Don’t have an account? Sign up here</Link>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteLogin