import React, { Component } from 'react'
import Listing from './Listing'
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
            <main>
                <section className="section route-listings">
                    <div className="container">
                        {
                            this.state.listings
                            .sort().reverse()
                            .map((listing) => {
                                var props = {
                                    key: listing.id,
                                    ...listing,
                                    loadListings: this.loadListings
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