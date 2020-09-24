import React, {Component} from 'react'
import {navigate} from '@reach/router'
import API from './API'
import {animated} from 'react-spring/renderprops'

class Listing extends Component {

    render() {
        var {brand, name, description, price, photo, category, id, y, opacity, user} = this.props
        var photoFallback = '/images/fallback.svg'
        var pricePrefix = '$'+price
        var userFallback = '/images/user-fallback.png'
        console.log(this.props)

        return (
            <animated.div className="listing-item" 
            style={{
                transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                opacity, 
            }}>
         
                <div className="listing-description" onClick={() => {navigate('/listing/'+id+'/description')}}>
                    <div className="listing-info">
                        <h1>{brand}</h1>
                        <h2>{name}</h2>
                        <p>{description}</p>
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
                <div className="profile-image" onClick={() => {navigate('/user/'+user.id+'/listings')}}>
                    {/* <img src={user.photo ? API.serverUrl+user.photo : userFallback} alt="" /> */}
                </div>
                
            </animated.div>
        )
    }
}

export default Listing