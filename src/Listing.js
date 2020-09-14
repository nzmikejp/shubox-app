import React, { Component } from 'react'
import { Link } from '@reach/router'
import API from './API'

class Listing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var {name, description, price, gender, photo} = this.props
        var photoPrefix = '/images/'+photo+'.png'

        return (
            <div className="listing-item">
                <div className="listing-description">
                    <div className="listing-info">
                        <h1>{name}</h1>
                        <h2>Jadon Boot</h2>
                        <p>
                            {description}
                        </p>
                    </div>
                    <div className="listing-price">
                        <div className="item-price">
                            <h1><span>Price</span>{price}</h1>
                        </div>
                        <p className="type-gender">{gender}</p>
                    </div>
                </div>
                <div className="listing-image">
                    <img src={photoPrefix} alt=""/>
                </div>
                <div className="listing-btns">
                    <div className="btn-round-s btn-gray">
                        <i className="fas fa-pen btn-font-s"></i>
                    </div>
                    <div className="btn-round-s btn-red">
                        <i className="fas fa-trash btn-font-s"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing