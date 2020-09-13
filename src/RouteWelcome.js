import React, { Component } from 'react'
import { Link } from "@reach/router"

class RouteWelcome extends Component {
    render(){
        return(
            <main>
                <section className="section route-start">
                    <div className="container">
                        <img src="/images/shu-logo-large.png" alt="Logo"/>
                        <Link to="/types">
                            <button className="btn btn-gray">Browse now</button>
                        </Link>
                        <hr className="divider"/>
                        <Link to="/users/authenticate">
                            <button className="btn btn-red">Sign in</button>
                        </Link>
                        <Link to="/users/create" className="signup-link">dont’ have an account? no problem, sign up here</Link>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteWelcome