import React, { Component } from 'react'
import Listing from './Listing'
import { navigate } from '@reach/router'
import API from './API'

class Listings extends Component {
    constructor(props){
        super(props)

        this.state = { 
            listings: []
        }
    }
    loadListings = () => {
        API.getListings().then(res =>{
            this.setState({listings:res.data})
        })
    }
    
    componentDidMount(){
        this.loadListings();
    }

   handleAddListing = () => {
    navigate('/listings/create')
   }

    render(){
        return(
            <section className="section route-listings">
                <div className="header-container">
                    <header className="btn-flex">
                        <div className="btn-round-l btn-gray" onClick={this.handleAddListing}>
                            <i className="fas fa-plus btn-font-s"></i>
                        </div>
                        <span className="header-title">Add listing</span>
                    </header>
                </div>
                <div className="container">
                    {
                        this.state.listings.map((listing)=>{
                            var listingProps ={
                                ...listing,
                                key: listing.id,
                                loadListings:this.loadListings

                            }
                            return(
                                <Listing {...listingProps}/>
                            )
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Listings