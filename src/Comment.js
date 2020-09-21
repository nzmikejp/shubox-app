import React, { Component } from 'react'
import API from './API'

class Comment extends Component {

    handleCommentDelete = () => {
        var {id, loadComments} = this.props
        API.deleteComment(id).then(res => {
            loadComments()
        })
    }

    render(){
        var { content, user, currentUser } = this.props
        console.log(currentUser)

        return(
            <div className="dialogue-comment">
                <div className="profile-image">
                    <img src={user.photo ? API.serverUrl+user.photo : "/images/user-fallback.png" }alt="" />
                </div>
                <p className="profile-comment">
                    {content}
                </p>
                { currentUser && user.id === currentUser.id ? (
                    <div className="btn-round-s btn-red" onClick={this.handleCommentDelete}>
                        <i className="fas fa-trash btn-font-s"></i>
                    </div>
                ) : null
                }

            </div>
        )
    }
}

export default Comment