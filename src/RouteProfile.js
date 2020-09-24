import React, {Component} from 'react'
import {navigate} from '@reach/router'
import UserListing from './UserListing'
import {Keyframes} from 'react-spring/renderprops'
import API from './API'

const ListingAnimation = Keyframes.Trail({
    appear: [{y: 0, opacity: 1,delay: 250, from: {y: 50, opacity: 0}}]
})

class RouteProfile extends Component {

    render(){
        var {currentUser, loadCurrentUser} = this.props
        var {id, name, username, listings, photo} = currentUser
        var photoFallback = '/images/user-fallback.png'
        
        return currentUser ? (
            <main>
                <section className="section-scroll route-user">
                    <div className="header">
                        <div className="user-image">
                            <div className="profile-image">
                                <img src={photo ? API.serverUrl+photo : photoFallback} alt="" />
                            </div>
                        </div>
                        <h1>{username}</h1>
                        <h2>{name}</h2>
                        <div className="btn-gray btn-round-l btn-settings" onClick={() => {navigate('/users/'+id+'/edit')}}>
                            <i className="fas fa-cog"></i>
                        </div>
                    </div>
                    <div className="container">
                        <button className="btn btn-gray btn-noshadow" onClick={() => {navigate('/listings/create')}}>Create listing</button>
                        <hr className="divider-dark" />
                        <ListingAnimation
                            native
                            items={listings.sort((a,b)=>b.id-a.id)}
                            keys={listings.map((listing) => listing.id)}
                            state={'appear'}>

                            {(listing) => ({y, opacity, ...props}) => {

                                var listingProps = {
                                    key: listing.id,
                                    ...listing,
                                    y,
                                    opacity,
                                    loadCurrentUser: loadCurrentUser
                                }
                                return <UserListing {...listingProps} />   
                                 
                            }}

                        </ListingAnimation>
                    </div>
                </section>
            </main>
        ):null
    }
}

export default RouteProfile