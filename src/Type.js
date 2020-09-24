import React, {Component} from 'react'
import {navigate} from '@reach/router'
import {animated} from 'react-spring/renderprops'

class Type extends Component {

    render() {
        var {name, photo, id, y, opacity} = this.props
        var photoPath = '/images/'+photo+'.png'

        return (
            <animated.div className="catergory" onClick={() => {navigate('/types/'+id)}}
                style={{
                    transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                    opacity, 
                }}>
                <div className="catergory-title">
                    <h1>{name}</h1>
                </div>
                <div className="catergory-image">
                    <img src={photoPath} alt="Sneaker" />
                </div>
            </animated.div>
        )
    }
}

export default Type