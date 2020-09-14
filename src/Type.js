import React, { Component } from 'react'

class Type extends Component {

    render() {
        var { name, photo } = this.props
        var photoPath = "/images/"+photo+".png"

        return (
            <div className="catergory">
                <div className="catergory-title">
                    <h1>{name}</h1>
                </div>
                <div className="catergory-image">
                    <img src={photoPath} alt="Sneaker" />
                </div>
            </div>
        )
    }
}

export default Type