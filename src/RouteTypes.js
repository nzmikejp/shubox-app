import React, {Component} from 'react'
import Type from './Type'
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
                <section className="section-scroll route-types">
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