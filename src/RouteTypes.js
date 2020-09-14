import React, { Component } from 'react'
import Type from './Type'
import API from './API'

class RouteTypes extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            types: [
               {
                   id: 1,
                   name: "sneakers",
                   photo: "type-1"
               }, 
               {
                   id: 2,
                   name: "runners",
                   photo: "type-2"
               }, 
               {
                   id: 3,
                   name: "boots",
                   photo: "type-3"
               }, 
               {
                   id: 4,
                   name: "kids",
                   photo: "type-4"
               }, 
            ]
        }
    }

    // loadTypes = () => {
    //     API.getTypes().then(res => {
    //         this.setState({types: res.data})
    //     })
    // }

    // componentDidMount(){
    //     this.loadTypes()
    // }

    render(){

        return(
            <main>
                <section className="section route-types">
                {
                    this.state.types.map((type) => {
                        var props = {
                            key: type.id,
                            ...type,
                            loadTypes:this.loadTypes
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