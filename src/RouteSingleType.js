import React, { Component } from 'react'
import Listing from './Listing'
import API from './API'

class RouteSingleType extends Component {
    constructor(props){
        super(props)

        this.state = {
            type: null,
        }
    }

    loadType = () => {
        var {id} = this.props
        API.getSingleType(id).then(res => this.setState({type:res.data}))
      }
    
      componentDidMount(){
        this.loadType()
      }
    
      componentDidUpdate(prevProps, prevState){
        var {id} = this.props
    
        if(id != prevProps.id){
          this.loadType()
        }
      }

    render(){
        var { type } = this.state

        return type ? (
            <main>
                <section className="section route-listings">
                    <div className="container">
                        {
                            type.listings.map((listing) => {
                                var props = {
                                    key: listing.id,
                                    ...listing,
                                    loadListings: this.loadType
                                }
                                return (<Listing {...props} />)
                            })
                        }
                    </div>
                </section>
            </main>
        ) : null
    }
}

export default RouteSingleType