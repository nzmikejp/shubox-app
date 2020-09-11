import React, { Component } from 'react'

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <footer className="footer active">
                <div className="user-info">
                    <div className="user-profile">
                        <div className="profile-image">
                            <img src="/images/profile-image.png" alt="Profile Image"/>
                        </div>
                        <p><span>Welcome</span> Username</p>
                    </div>
                    <div className="logo">
                        <img src="/images/shu-logo-long.png" alt="Logo"/>
                    </div>
                </div>
                <div className="nav">
                    <i className="fas fa-home"></i>
                    <i className="fas fa-compass"></i>
                    <i className="fas fa-user"></i>
                </div>
            </footer>
        )
    }
}

export default Footer

