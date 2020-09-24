import React, {Component} from 'react'
import {animated} from 'react-spring/renderprops'
import API from './API'

class Comment extends Component {

    handleCommentDelete = () => {
        var {id, loadComments} = this.props
        API.deleteComment(id).then(res => {
            loadComments()
        })
    }

    render(){
        var {content, user, listing,  currentUser, y, opacity} = this.props

        return(
            <animated.div className="dialogue-comment"
            style={{
                transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                opacity, 
            }}>
                <div className="profile-image">
                    <img src={user.photo ? API.serverUrl+user.photo : "/images/user-fallback.png"}alt="" />
                </div>
                <p className="profile-comment">
                    {content}
                </p>
                { currentUser && listing.user_id === currentUser.id ? (
                    <div className="btn-round-s btn-red" onClick={this.handleCommentDelete}>
                        <i className="fas fa-trash btn-font-s"></i>
                    </div>
                ) : null
                }

            </animated.div>
        )
    }
}

export default Comment