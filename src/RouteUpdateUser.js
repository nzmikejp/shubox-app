import React, { Component } from 'react'

class RouteUpdateUser extends Component {
    render(){
        return(
            <main>
                <section className="section-scroll route-update-user">
                    <div className="container">
                        <div className="header">
                            <h1>Update your Profile</h1>
                        </div>
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
                                <label for="profile-image">Profile Image:</label>
                                <input type="file" name="profile-image" id="photo" />
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
                                <button type="submit" className="btn btn-gray">Update</button>
                            </div>
                        </form>
                        <hr className="divider-dark" />
                        <button className="btn btn-gray">Log out</button>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteUpdateUser