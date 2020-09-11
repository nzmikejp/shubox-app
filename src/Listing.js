import React, { Component } from 'react'
import { Link } from '@reach/router'
import API from './API'

class Listing extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="listing-item">
                <div className="listing-description">
                    <div className="listing-info">
                        <h1>Dr Martens</h1>
                        <h2>Jadon Boot</h2>
                        <p>
                            A fierce evolution of the 8-eye boot, the Jadon retains all its original details — grooved edges, yellow stitching and a heel-loop — and adds a chunky, empowering...
                        </p>
                    </div>
                    <div className="listing-price">
                        <div className="item-price">
                            <h1><span>Price</span>$350.00</h1>
                        </div>
                        <p className="type-gender">unisex</p>
                    </div>
                </div>
                <div className="listing-image">
                    <img src="/images/boots-1.png" alt="" />
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