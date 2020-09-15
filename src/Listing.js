import React, { Component } from 'react'
import { Link } from '@reach/router'
import API from './API'

class Listing extends Component {
    
    handleDelete = () => {
        var {id,loadListings} = this.props
        API.deleteListing(id)
        loadListings()
    }

    render() {
        var {id, name, description, price, gender, photo, brand} = this.props
        var imagePath = "/images/"+photo+".png"
        
        return (
            <div className="listing-item">
                <div className="listing-description">
                    <div className="listing-info">
                        <h1>{name}</h1>
                        <h2>{brand}</h2>
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
                    <img src={imagePath} alt="" />
                </div>
                <div className="listing-btns">
                    <div className="btn-round-s btn-gray">
                        <Link to={'/listings/'+id+'/edit'}>
                        <i className="fas fa-pen btn-font-s"></i>
                        </Link>
                    </div>
                    <div className="btn-round-s btn-red">
                        <i onClick={this.handleDelete} className="fas fa-trash btn-font-s"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing