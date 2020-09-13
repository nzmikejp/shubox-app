import React, { Component } from 'react'

class RouteProfile extends Component {
    render(){
        return(
            <main>
                <section className="section-scroll route-user">
                    <div className="header">
                        <div className="profile-image">
                            <div className="profile-image">
                                <img src="/images/profile-image.png" alt="Profile Image" />
                            </div>
                        </div>
                        <h1>Username</h1>
                        <h2>Jane Doe</h2>
                        <div className="btn-gray btn-round-l btn-settings">
                            <i className="fas fa-cog"></i>
                        </div>
                    </div>
                    <div className="container">
                        <button className="btn btn-gray btn-noshadow">Create listing</button>
                        <hr className="divider-dark" />
                        <div className="listing-item">
                            <div className="listing-description">
                                <div className="listing-info">
                                    <h1>Dr Martens</h1>
                                    <h2>Jadon Boot</h2>
                                    <p>
                                        A fierce evolution of the 8-eye boot, the Jadon retains all its original details — grooved edges, yellow stitching and a heel-loop — and adds a chunky, empowering...
                                            </p>
                                </div>
                                <div className="listing-price">
                                    <div className="item-price">
                                        <h1><span>Price</span>$350.00</h1>
                                    </div>
                                    <p className="type-gender">unisex</p>
                                </div>
                            </div>
                            <div className="listing-image">
                                <img src="/images/boots-1.png" alt="" />
                            </div>
                            <div className="listing-btns">
                                <div className="btn-round-s btn-gray">
                                    <i className="fas fa-pen btn-font-s"></i>
                                </div>
                                <div className="btn-round-s btn-red">
                                    <i className="fas fa-trash btn-font-s"></i>
                                </div>
                            </div>
                        </div>
                        <div className="listing-item">
                            <div className="listing-description">
                                <div className="listing-info">
                                    <h1>Dr Martens</h1>
                                    <h2>Jadon Boot</h2>
                                    <p>
                                        A fierce evolution of the 8-eye boot, the Jadon retains all its original details — grooved edges, yellow stitching and a heel-loop — and adds a chunky, empowering...
                                            </p>
                                </div>
                                <div className="listing-price">
                                    <div className="item-price">
                                        <h1><span>Price</span>$350.00</h1>
                                    </div>
                                    <p className="type-gender">unisex</p>
                                </div>
                            </div>
                            <div className="listing-image">
                                <img src="/images/boots-1.png" alt="" />
                            </div>
                            <div className="listing-btns">
                                <div className="btn-round-s btn-gray">
                                    <i className="fas fa-pen btn-font-s"></i>
                                </div>
                                <div className="btn-round-s btn-red">
                                    <i className="fas fa-trash btn-font-s"></i>
                                </div>
                            </div>
                        </div>
                        <div className="listing-item">
                            <div className="listing-description">
                                <div className="listing-info">
                                    <h1>Dr Martens</h1>
                                    <h2>Jadon Boot</h2>
                                    <p>
                                        A fierce evolution of the 8-eye boot, the Jadon retains all its original details — grooved edges, yellow stitching and a heel-loop — and adds a chunky, empowering...
                                                </p>
                                </div>
                                <div className="listing-price">
                                    <div className="item-price">
                                        <h1><span>Price</span>$350.00</h1>
                                    </div>
                                    <p className="type-gender">unisex</p>
                                </div>
                            </div>
                            <div className="listing-image">
                                <img src="/images/boots-1.png" alt="" />
                            </div>
                            <div className="listing-btns">
                                <div className="btn-round-s btn-gray">
                                    <i className="fas fa-pen btn-font-s"></i>
                                </div>
                                <div className="btn-round-s btn-red">
                                    <i className="fas fa-trash btn-font-s"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteProfile