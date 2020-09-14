import React, { Component } from 'react'
import { Link } from '@reach/router'
import API from './API'

class Listing extends Component {
    constructor(props){
        super(props)
    }

    handleTrashBtn = () => {
        var {id,loadListings} = this.props
        API.deleteListing(id)
        loadListings()
    }

    render() {
        var {id,brand,name,shoes_style,price,description,photo,type_id} = this.props
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
                            <h1><span>Price</span>{price}</h1>
                        </div>
                        <p className="type-gender">{shoes_style}</p>
                    </div>
                </div>
                <div className="listing-image">
                    <img src="/images/boots-1.png" alt="" />
                </div>
                <div className="listing-btns">
                    <div className="btn-round-s btn-gray">
                        <Link to={'/listings/'+id+'/edit'}><i className="fas fa-pen btn-font-s"></i></Link>
                    </div>
                    <div className="btn-round-s btn-red">
                        <i  className="fas fa-trash btn-font-s"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing