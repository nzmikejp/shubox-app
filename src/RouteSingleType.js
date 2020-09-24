import React, {Component} from 'react'
import Listing from './Listing'
import {Keyframes} from 'react-spring/renderprops'
import API from './API'

const ListingAnimation = Keyframes.Trail({
    appear: [{y: 0, opacity: 1,delay: 250, from: {y: 50, opacity: 0}}]
})
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
    
        if(id !== prevProps.id){
          this.loadType()
        }
      }

    render(){
        var {type} = this.state
        
        return type ? (
            <main>
                <section className="section route-listings">
                    <div className="container">
                        <ListingAnimation
                            native
                            items={type.listings.sort((a,b)=>b.id-a.id)}
                            keys={type.listings.map((listing) => listing.id)}
                            state={'appear'}>

                            {(listing) => ({y, opacity,...props}) => {

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
        ) : null
    }
}

export default RouteSingleType