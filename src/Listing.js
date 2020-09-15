import React, { Component } from 'react'
import { navigate } from '@reach/router'
import API from './API'

class Listing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var {brand, name, description, price, photo, category, id} = this.props
        var photoPath = '/images/'+photo+'.png'
        var pricePrefix = '$'+price

        return (
            <div className="listing-item" onClick={()=>{navigate('/listing/'+id+'/description')}}>
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
                        <p className="type-gender" style={{backgroundColor: category.color}}>{category.name}</p>
                    </div>
                </div>
                <div className="listing-image">
                    <img src={photoPath ? photoPath : '/images/fallback'} alt="" />
                </div>
                
            </div>
        )
    }
}

export default Listing