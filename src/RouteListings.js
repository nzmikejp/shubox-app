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

    render(){
        return(
            <main>
                <section className="section route-listings">
                    <div className="container">
                        <Listing/>
                    </div>
                </section>
            </main>
        )
    }
}

export default Listings