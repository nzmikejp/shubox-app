import React, {Component} from 'react'
import Listing from './Listing'
import {Keyframes} from 'react-spring/renderprops'
import API from './API'


const ListingAnimation = Keyframes.Trail({
    appear: [{y: 0, opacity: 1,delay: 250, from: {y: 50, opacity: 0}}]
})

class Listings extends Component {
    constructor(props){
        super(props)

        this.state = { 
            listings: []
        }
    }

    loadListings = () => {
        API.getListings().then(res => {
        this.setState({listings: res.data})
      })
    }
    
    componentDidMount(){
      this.loadListings();
    }

    render(){

        var listings = this.state.listings.sort((a,b)=>b.id-a.id)
        return(
            <main>
                <section className="section route-listings">
                    <div className="container">

                        <ListingAnimation
                            native
                            items={listings}
                            keys={listings.map((listing) => listing.id)}
                            state={'appear'}>

                            {(listing) => ({ y, opacity,...props }) => {

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
        )
    }
}

export default Listings