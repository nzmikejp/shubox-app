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
                    id: 1,
                    brand: 'Dr Martens',
                    name: 'jadon boot',
                    description: "A fierce evolution of the 8-eye boot, the Jadon retains all its original details — grooved edges, yellow stitching and a heel-loop — and adds a chunky, empowering...",
                    price: 360,
                    photo: 'boots-1'
                }
            ]
        }
    }

    render(){
        return(
            <main>
                <section className="section route-listings">
                    <div className="container">
                        {
                            this.state.listings.map((listing) => {
                                var props = {
                                    key: listing.id,
                                    ...listing,
                                }
                                return (<Listing {...props} />)
                            })
                        }
                    </div>
                </section>
            </main>
        )
    }
}

export default Listings