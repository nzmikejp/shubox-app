import React, {Component} from 'react'
import {navigate} from '@reach/router'
import API from './API'

class Listing extends Component {

    render() {
        var {brand, name, description, price, photo, category, id} = this.props
        var photoFallback = '/images/fallback.svg'
        var pricePrefix = '$'+price

        return (
            <div className="listing-item">
                <div className="listing-description" onClick={() => {navigate('/listing/'+id+'/description')}}>
                    <div className="listing-info">
                        <h1>{brand}</h1>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="listing-price">
                        <div className="item-price">
                            <h1><span>Price</span>{pricePrefix}</h1>
                        </div>
                        <p className="type-gender" style={{backgroundColor: category.color}}>{category.name}</p>
                    </div>
                </div>
                <div className="listing-image">
                    <img src={photo ? API.serverUrl+photo : photoFallback} alt="" />
                </div>
                
            </div>
        )
    }
}

export default Listing