import React, { Component } from 'react'
import API from './API'

class Footer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        var {currentUser} = this.props
        var avatar = '/images/profile-image.png'

        return(
            <footer className="footer active">
                <div className="user-info">
                    <div className="user-profile">
                        {currentUser ? (
                            <>
                            <div className="profile-image">
                                <img src={currentUser.photo ? API.serverUrl+currentUser.photo : avatar} alt="Profile Image"/>
                            </div>
                            <p><span>Welcome</span>{currentUser.name}</p>
                            </>
                            ) : null
                        }
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

