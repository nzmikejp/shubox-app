import React, { Component } from 'react'

class RouteAddUser extends Component {
    render(){
        return(
            <main>
                <section className="section route-create-user">
                    <div className="container">
                        <img src="./assets/images/shu-logo-small.png" alt="" />
                        <h1>Account Sign Up</h1>
                        <hr className="divider" />
                        <form action="#" className="pure-form pure-form-stacked">
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label for="user-name">User Name:</label>
                                <input type="text" name="user-name" id="user-name" placeholder="Enter your username" />
                            </div>
                            <div className="form-group">
                                <label for="user-email">Email:</label>
                                <input type="text" name="user-email" id="user-email" placeholder="Enter your username" />
                            </div>
                            <div className="form-group">
                                <label for="user-password">Password:</label>
                                <input type="password" name="user-password" id="user-password" placeholder="Enter your password" />
                            </div>
                            <div className="form-group with-btn">
                                <button type="submit" className="btn btn-gray">Sign up</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteAddUser