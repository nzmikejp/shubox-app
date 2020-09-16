import React, { Component } from 'react'
import { navigate } from '@reach/router'
import API from './API'

class UserListing extends Component {

    handleDelete = () => {
        var {id, loadCurrentUser} = this.props
        API.deleteListing(id).then(res => {
            loadCurrentUser()
        })
    }

    render() {
        var {brand, name, description, price, photo, category, id,} = this.props
        var photoFallback = '/images/fallback.svg'
        var pricePrefix = '$'+price

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
                        <p className="type-gender" style={{backgroundColor: category.color}}>{category.name}</p>
                    </div>
                </div>
                <div className="listing-image">
                    <img src={photo ? API.serverUrl+photo : photoFallback} alt="" />
                </div>
                <div className="listing-btns">
                    <div className="btn-round-s btn-gray" onClick={()=>{navigate('/listings/'+id+'/edit')}}>
                        <i className="fas fa-pen btn-font-s"></i>
                    </div>
                    <div className="btn-round-s btn-red" onClick={this.handleDelete}>
                        <i className="fas fa-trash btn-font-s"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserListing