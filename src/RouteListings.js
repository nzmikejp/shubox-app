import React, { Component } from 'react'
import Listing from './Listing'
import { Link } from '@reach/router'
import API from './API'

class Listings extends Component {
    constructor(props){
        super(props)

        this.state = { 
            listings: [
                {
                    id: Number,
                    name: String,
                    description: String,
                    price: Number,
                    gender: String,
                    photo: String,
                    types_int: Number,
                    user_id: Number, 
                }
            ]
        }
    }

    componentDidMount(){
        this.loadListings();
        
    }
    loadListings = () =>{
        API.getListings().then(res => {
            this.setState({listings:res.data})
        })
    }

    render(){
        return(
            <section className="section route-listings">
                <header>
                    <div className='btn-large'>
                        <button className='btn btn-red btn-noshadow' type='submit'> 
                            <i className="fas fa-plus-circle"></i>

                                <Link to="/listings/create">
                                    <h2> Add </h2>
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
        )
    }
}

export default Listings