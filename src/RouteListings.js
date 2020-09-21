import React, { Component } from 'react'
import Listing from './Listing'
import { Link, navigate } from '@reach/router'
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
            // console.log(res.data)
        })
    }

    componentDidMount(){
        this.loadListings();
    }

    addListing = () => {
        navigate('/listings/create')
    }

    render(){
        return(
            <section className="section route-listings">
                <div className="header-btn">
                    <header className="btn-flex">
                        <div className="btn-round-l btn-red" onClick={this.addListing}>
                            <i className="fas fa-plus btn-font-s"></i>
                        </div>
                        
                    </header>
                    <span className="header-title">Add a listing</span>
                </div>
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