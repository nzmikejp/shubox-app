import React, { Component } from 'react'
import API from './API'

class Comment extends Component {

    handleCommentDelete = () => {
        var {id, loadListing} = this.props
        API.deleteComment(id).then(res => {
            loadListing()
        })
    }

    render(){
        var { content } = this.props
        return(
            <div className="dialogue-comment">
                <div className="profile-image">
                    <img src="/images/user-fallback.png" alt="" />
                </div>
                <p className="profile-comment">
                    {content}
                </p>
                {/* { listing user ? (
                    <div className="btn-round-s btn-red" onClick={this.handleCommentDelete}>
                        <i className="fas fa-trash btn-font-s"></i>
                    </div>
                ) : null
                } */}

            </div>
        )
    }
}

export default Comment