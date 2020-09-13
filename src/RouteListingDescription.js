import React, { Component } from 'react'

class RouteListingDescription extends Component {
    render(){
        return(
            <main>
                <section className="section-scroll route-listing">
                    <div className="description-image">
                        <img src="/images/boots-1.png" alt="" />
                        <div className="btn-gray btn-round-l btn-back">
                            <i className="fas fa-chevron-left"></i>
                        </div>
                    </div>
                    <div className="description-wrap">
                        <div className="description-container">
                            <div className="description-header">
                                <div>
                                    <h1>Dr Martens</h1>
                                    <h2>Jadon Boot</h2>
                                </div>
                                <p className="type-gender">unisex</p>
                            </div>
                            <div className="description-body">
                                <p>
                                    A fierce evolution of the 8-eye boot, the Jadon retains all its original details — grooved edges, yellow stitching and a heel-loop — and adds a chunky, empowering platform sole.
                                    The unisex Jadon boot is made with the classic Dr. Martens Polished Smooth leather, a lightly textured, highly durable leather with a soft sheen. The boot sits on the durable, comfortable AirWair™ sole, that's oil and fat resistant with good abrasion and slip resistance. Built to last, it's made using one of the finest methods of construction: the Goodyear Welt.
                                </p>
                            </div>
                            <div className="description-details">
                                <div className="item-price">
                                    <h1><span>Price</span>$350.00</h1>
                                </div>
                                <div className="description-buynow">
                                    <button className="btn btn-green btn-noshadow btn-small">buy now</button>
                                </div>
                                <div className="description-seller">
                                    <div className="profile-image">
                                        <img src="/images/profile-image.png" alt="Profile Image" />
                                    </div>
                                    <div className="profile-details">
                                        <p className="profile-title">Seller</p>
                                        <p className="profile-user">Username</p>
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
                                            <img src="/images/profile-image.png" alt="Profile Image" />
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
                                            <img src="/images/profile-image.png" alt="Profile Image" />
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
        )
    }
}

export default RouteListingDescription