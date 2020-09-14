import React, { Component } from 'react'

class RouteTypes extends Component {
    render(){
        return(
            <main>
                <section className="section route-types">
                <div className="catergory">
                    <div className="catergory-title">
                        <h1>Sneakers</h1>
                    </div>
                    <div className="catergory-image">
                        <img src="/images/type-sneakers.png" alt="Sneaker"/>
                    </div>
                </div>    
                <div className="catergory">
                    <div className="catergory-title">
                        <h1>Runners</h1>
                    </div>
                    <div className="catergory-image">
                        <img src="/images/type-runners.png" alt="Running Shoe"/>
                    </div>
                </div>    
                <div className="catergory">
                    <div className="catergory-title">
                        <h1>Boots</h1>
                    </div>
                    <div className="catergory-image">
                        <img src="/images/type-boots.png" alt="Boot"/>
                    </div>
                </div>    
                <div className="catergory">
                    <div className="catergory-title">
                        <h1>Kids</h1>
                    </div>
                    <div className="catergory-image">
                        <img src="/images/type-kids.png" alt="Kids Shoe"/>
                    </div>
                </div> 
            </section>
            </main>
        )
    }
}

export default RouteTypes