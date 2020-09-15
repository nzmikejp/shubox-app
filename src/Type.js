import React, { Component } from 'react'
import { navigate } from '@reach/router'

class Type extends Component {

    render() {
        var { name, photo, id } = this.props
        var photoPath = "/images/"+photo+".png"

        return (
            <div className="catergory" onClick={()=>{navigate('/types/'+id)}}>
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