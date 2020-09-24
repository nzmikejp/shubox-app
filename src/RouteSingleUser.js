import React, {Component} from 'react'
import Listing from './Listing'
import {Keyframes} from 'react-spring/renderprops'
import API from './API'

const ListingAnimation = Keyframes.Trail({
    appear: [{y: 0, opacity: 1,delay: 250, from: {y: 50, opacity: 0}}]
})
class RouteSingleUser extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: null,
        }
    }

    loadUser = () => {
        var {id} = this.props
        API.getSingleUser(id).then(res => this.setState({user:res.data}))
    }
    
    componentDidMount(){
        this.loadUser()
    }

    render(){
        var {user} = this.state
        console.log(user)
        
        return user ? (
            <main>
                <section className="section route-listings">
                    <div className="container">
                        <ListingAnimation
                            native
                            items={user.listings.sort((a,b)=>b.id-a.id)}
                            keys={user.listings.map((listing) => listing.id)}
                            state={'appear'}>

                            {(listing) => ({y, opacity,...props}) => {

                                var listingProps = {
                                    key: listing.id,
                                    ...listing,
                                    y,
                                    opacity,
                                    loadListings: this.loadListings
                                }
                                return <Listing {...listingProps} />   
                                 
                            }}

                        </ListingAnimation>
                    </div>
                </section>
            </main>
        ) : null
    }
}

export default RouteSingleUser