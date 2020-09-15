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

    loadListings = ()=> {
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
                <header>
                    <div className="btn-large">
                        <button type="submit" className="btn btn-red btn-noshadow">
                            <i className="fas fa-plus-circle"></i>
                                <Link to="/listings/create">
                                    <h3> Add Listing</h3>
                                </Link>
                        </button> 
                    </div>
                </header>
                <div className="container">
                    {
                        this.state.listings.map((listing)=>{

                            var listingProps = {
                                key:listing.id,
                                ...listing,
                                loadListings:this.loadListings
                            }
                            return(

                                <Listing {...listingProps}/>
                            )
                        })
                    }
                    
                </div>
            </section>
        );
    }
}

export default Listings