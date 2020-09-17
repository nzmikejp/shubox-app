import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import API from './API'

class RouteLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:''
        }
    }

    loginBtn = (e) => {
        e.preventDefault()
        var formData = new FormData(this.form)
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
                this.setState({message:'Invalid username or password!!!'})
            }
        })
    }

    render(){
        return(
            <main>
                <section className="section route-user-login">
                    <div className="container">
                        <img src="./assets/images/shu-logo-small.png" alt="" />
                        <h1>Account Sign In</h1>
                        <hr className="divider"/>
                        <form action="#" onSubmit={this.loginBtn} ref={(el) => {this.form = el}} className="pure-form pure-form-stacked">
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
                                <p>{this.state.message}</p>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteLogin