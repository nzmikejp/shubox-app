import React, { Component } from 'react'
import Type from './Type'

class RouteTypes extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            types: [
               {
                   id: 1,
                   name: "sneakers",
                   photo: "type-1"
               } 
            ]
        }
    }
    render(){

        return(
            <main>
                <section className="section route-types">
                {
                    this.state.types.map((type) => {
                        var props = {
                            key: type.id,
                            ...type,
                        }
                        return (<Type {...props} />)
                    })
                }
                </section>
            </main>
        )
    }
}

export default RouteTypes