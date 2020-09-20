import React, { Component } from 'react'
import { navigate } from '@reach/router'
import UserListing from './UserListing'
import API from './API'

class RouteProfile extends Component {

    render(){
        var {currentUser, loadCurrentUser} = this.props
        var {id, name, username, listings, photo} = currentUser
        var photoFallback = '/images/user-fallback.png'
        
        return currentUser ? (
            <main>
                <section className="section-scroll route-user">
                    <div className="header">
                        <div className="profile-image">
                            <div className="profile-image">
                                <img src={photo ? API.serverUrl+photo : photoFallback} alt="" />
                            </div>
                        </div>
                        <h1>{username}</h1>
                        <h2>{name}</h2>
                        <div className="btn-gray btn-round-l btn-settings" onClick={()=>{navigate('/users/'+id+'/edit')}}>
                            <i className="fas fa-cog"></i>
                        </div>
                    </div>
                    <div className="container">
                        <button className="btn btn-gray btn-noshadow" onClick={()=>{navigate('/listings/create')}}>Create listing</button>
                        <hr className="divider-dark" />
                        {
                            listings
                            .sort().reverse()
                            .map((listing)=>{
                                var props = {
                                    key: listing.id,
                                    ...listing,
                                    loadCurrentUser: loadCurrentUser
                                }
                                return (<UserListing {...props} />)
                            })
                        }
                        
                    </div>
                </section>
            </main>
        ):null
    }
}

export default RouteProfile