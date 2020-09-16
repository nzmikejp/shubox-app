import React, { Component } from 'react'
import { navigate } from '@reach/router'
import API from './API'

class Listing extends Component {
    
    handleDeleteListing = () => {
        var {id,loadListings} = this.props
        API.deleteListing(id)
        loadListings()
    }

    handleUpdateListing = () => {
        var {id} = this.props
        navigate('listings/'+id+'/edit')
    }

    render() {
        var {brand, name, description, price, gender, photo} = this.props
        // var photoPrefix = '/images/'+photo+'.png'
        var photoPrefix = API.serverUrl
        var pricePrefix = '$'+price
        console.log(photo)

        return (
            <div className="listing-item">
                <div className="listing-description">
                    <div className="listing-info">
                        <h1>{brand}</h1>
                        <h2>{name}</h2>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="listing-price">
                        <div className="item-price">
                            <h1><span>Price</span>{pricePrefix}</h1>
                        </div>
                        <p className="type-gender">{gender}</p>
                    </div>
                </div>
                <div className="listing-image">
                    <img src={photoPrefix+photo} alt=""/>
                </div>
                <div className="listing-btns">
                    <div className="btn-round-s btn-gray">
                        <i className="fas fa-pen btn-font-s" onClick={this.handleUpdateListing}></i>
                    </div>
                    <div className="btn-round-s btn-red">
                        <i onClick={this.handleDeleteListing} className="fas fa-trash btn-font-s"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing