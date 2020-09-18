import React, { Component } from 'react'
import { navigate } from '@reach/router'
import Comment from './Comment'
import API from './API'


class RouteListingDescription extends Component {
    constructor(props){
        super(props)

        this.state = {
            listing: {},
            comments: [
                {
                    id: 1,
                    content: 'this is a test message',
                    user_id: 1,
                    listing_id: 1
                }
            ]
        }
    }
    
    loadListing = () => {
        var {id} = this.props
        API.getSingleListing(id).then(res => this.setState({listing:res.data}))
    }
    
    componentDidMount(){
        this.loadListing()
    }
    
    handleCommentFormSubmit = (e)=>{
        e.preventDefault()
        var { currentUser, id, loadCurrentUser } = this.props
        var formData = new FormData(this.form)
        var data = {
            content: formData.get('user-comments'),
            user_id: currentUser.id,
            listing_id: id
        }

        API.addComment(data).then(res => {
            loadCurrentUser()
        })

    }
    
    render(){
        var { listing } = this.state
        var { brand, name, description, price, photo, category, user } = listing
        var photoFallback = '/images/fallback.svg'
        var userFallback = '/images/user-fallback.png'
        var pricePrefix = '$'+price 
        console.log(listing) 

        return category ? (
            <main>
                <section className="section-scroll route-listing">
                    <div className="description-image">
                        <img src={photo ? API.serverUrl+photo : photoFallback} alt="" />
                        <div className="btn-gray btn-round-l btn-back" onClick={()=>{navigate('/listings')}}>
                            <i className="fas fa-chevron-left"></i>
                        </div>
                    </div>
                    <div className="description-wrap">
                        <div className="description-container">
                            <div className="description-header">
                                <div>
                                    <h1>{brand}</h1>
                                    <h2>{name}</h2>
                                </div>
                                <p className="type-gender" style={{backgroundColor: category.color}}>{category.name}</p>
                            </div>
                            <div className="description-body">
                                <p>
                                    {description}
                                </p>
                            </div>
                            <div className="description-details">
                                <div className="item-price">
                                    <h1><span>Price</span>{pricePrefix}</h1>
                                </div>
                                <div className="description-buynow">
                                    <button className="btn btn-green btn-noshadow btn-small">buy now</button>
                                </div>
                                <div className="description-seller">
                                    <div className="profile-image">
                                        <img src={user.photo ? API.serverUrl+user.photo : userFallback} alt="" />
                                    </div>
                                    <div className="profile-details">
                                        <p className="profile-title">Seller</p>
                                        <p className="profile-user">{user.username}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="divider-dark" />
                            <div className="description-comments">
                                <h1>Comments & Questions</h1>
                                <form onSubmit={this.handleCommentFormSubmit} ref={(el) => {this.form = el}} className="pure-form">
                                    <div className="form-group">
                                        <input type="text" id="user-comments" name="user-comments" placeholder="Add a comment or question" />
                                        <button type="submit" className="btn-round-l btn-gray">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </form>
                                <div className="description-comment-dialogue">
                                    {
                                        this.state.comments.map((comment)=>{
                                            var props = {
                                                key: comment.id,
                                                ...comment,
                                                loadListing: this.loadListing
                                            }
                                            return(
                                                <Comment {...props}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        ):null
    }
}

export default RouteListingDescription