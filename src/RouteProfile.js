import React, { Component } from 'react'
import { navigate } from '@reach/router'
import Listing from './Listing'

class RouteProfile extends Component {
    constructor(props){
        super(props)

    }

    render(){
        var {currentUser} = this.props
        var {id, name, username} = currentUser
        console.log(id)
        
        return(
            <main>
                <section className="section-scroll route-user">
                    <div className="header">
                        <div className="profile-image">
                            <div className="profile-image">
                                <img src="/images/profile-image.png" alt="Profile Image" />
                            </div>
                        </div>
                        <h1>{username}</h1>
                        <h2>{name}</h2>
                        <div className="btn-gray btn-round-l btn-settings" onClick={()=>{navigate('/users/'+id+'/edit')}}>
                            <i className="fas fa-cog"></i>
                        </div>
                    </div>
                    <div className="container">
                        <button className="btn btn-gray btn-noshadow">Create listing</button>
                        <hr className="divider-dark" />
                        {/* <Listing/> */}
                        
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteProfile