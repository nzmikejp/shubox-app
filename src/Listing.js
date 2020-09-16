import React, { Component } from 'react'
import { navigate } from '@reach/router'
import API from './API'

class Listing extends Component {
    // constructor(props){
    //     super(props)
    // }

    deleteBtn = () => {
        var {id,loadListings} = this.props
        API.deleteListing(id)
        loadListings()
    }

    editBtn = () => {
        var {id} = this.props
        navigate('listings/'+id+'/edit')
    }

    render() {
        var {id,brand,name,gender,price,description,photo} = this.props
        // var photoLink = '/images/'+photo+'.png'
        var pricePath = '$'+price

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
                            <h1><span>Price</span>{pricePath}</h1>
                        </div>
                        <p className="type-gender">{gender}</p>
                    </div>
                </div>
                <div className="listing-image">
                    <img src={API.serverUrl + photo} alt="" />
                </div>
                <div className="listing-btns">
                    <div className="btn-round-s btn-gray">
                        <i onClick={this.editBtn} className="fas fa-pen btn-font-s"></i>
                    </div>
                    <div className="btn-round-s btn-red">
                        <i onClick={this.deleteBtn} className="fas fa-trash btn-font-s"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing