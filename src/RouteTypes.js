import React, { Component } from 'react'
import Type from './Types'
import { Link } from '@reach/router'
import API from './API'

class RouteTypes extends Component {
    constructor(props){
        super(props)

        this.state = {
            types: []
        }
    }

    loadTypes = () => {
        API.getTypes().then(res => {
            this.setState({types: res.data})
        })
    }

    componentDidMount(){
        this.loadTypes()
    }

    render(){
        return(
            <main>
                <section className="section route-types">
                    {
                        this.state.types.map((type) => {
                            var typeProps = {
                                key: type.id,
                                ...type,
                                loadTypes:this.loadTypes
                            }
                            return (<Type {...typeProps}/>)
                        })
                    }
                </section>
            </main>
        )
    }
}

export default RouteTypes