import React, { Component } from 'react'
import Listing from './Listing'
import { Link } from '@reach/router'
import API from './API'

class Listings extends Component {
    constructor(props){
        super(props)

        this.state = { 
            listings: []
        }
    }

    loadListings = () => {
        API.getListings().then(res => {
            this.setState({listings:res.data})
        })
    }

    componentDidMount(){
        this.loadListings();
    }

    render(){
        return(
            <section className="section route-listings">
                <div className="container">
                    {
                        this.state.listings.map((listing) => {
                            var listingProps = {
                                ...listing,
                                key: listing.id,
                                loadListings:this.loadListings
                            };
                            return(<Listing {...listingProps}/>)
                        })
                    }
                    
                </div>
            </section>
        )
    }
}

export default Listings