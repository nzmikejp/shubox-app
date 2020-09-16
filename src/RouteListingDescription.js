import React, { Component } from 'react'
import { navigate } from '@reach/router'
import API from './API'


class RouteListingDescription extends Component {
    constructor(props){
        super(props)

        this.state = {
            listing: {}
        }
    }
    
    loadListing = () => {
        var {id} = this.props
        API.getSingleListing(id).then(res => this.setState({listing:res.data}))
    }
    
    componentDidMount(){
        this.loadListing()
    }
    
    render(){
        var { listing } = this.state
        var {brand, name, description, price, photo, category, user} = listing
        var photoFallback = '/images/fallback.png'
        var userFallback = '/images/user-fallback.png'
        var pricePrefix = '$'+price
  


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
                                        <img src={user.photo ? API.serverUrl+user.photo : userFallback} alt="Profile Image" />
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
                                <form action="#" className="pure-form">
                                    <div className="form-group">
                                        <input type="text" id="user-comments" name="user-comments" placeholder="Add a comment or question" />
                                        <button type="submit" className="btn-round-l btn-gray">
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </form>
                                <div className="description-comment-dialogue">
                                    <div className="dialogue-comment">
                                        <div className="profile-image">
                                            <img src={user.photo ? API.serverUrl+user.photo : userFallback} alt="Profile Image" />
                                        </div>
                                        <p className="profile-comment">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quos autem veniam facere harum, nostrum minima tempore incidunt praesentium atque velit magnam possimus. Quas saepe quod magni
                                    </p>
                                        <div className="btn-round-s btn-red">
                                            <i className="fas fa-trash btn-font-s"></i>
                                        </div>
                                    </div>
                                    <div className="dialogue-comment">
                                        <div className="profile-image">
                                            <img src={ user.photo ? API.serverUrl+user.photo : userFallback} alt="Profile Image" />
                                        </div>
                                        <p className="profile-comment">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, quos autem veniam facere harum, nostrum minima tempore incidunt praesentium atque velit magnam possimus. Quas saepe quod magni
                                    </p>
                                        <div className="btn-round-s btn-red">
                                            <i className="fas fa-trash btn-font-s"></i>
                                        </div>
                                    </div>
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