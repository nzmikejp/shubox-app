import React, { Component } from 'react'
import { Link } from '@reach/router'
import API from './API'

class Type extends Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        var {name,photo} = this.props
        // var photoLink = "/images/"+photo+".png"

        return (
            <div className="catergory">
                <div className="catergory-title">
                    <h1>{name}</h1>
                </div>
                <div className="catergory-image">
                    <img src={API.serverUrl + photo} alt=""/>
                </div>
            </div>
        )
    }
}

export default Type