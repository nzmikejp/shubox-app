import React, {Component} from 'react'
import Type from './Type'
import {Keyframes, config} from 'react-spring/renderprops'
import API from './API'

const TypesAnimation = Keyframes.Trail({
    appear: [{y: 0, opacity: 1,delay: 250, from: {y: 50, opacity: 0}}]
})

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
        var types = this.state.types.sort().reverse()

        return(
            <main>
                <section className="section-scroll route-types">
                <TypesAnimation
                        native
                        items={types}
                        keys={types.map((type) => type.id)}
                        state={'appear'}
                        config={config.stiff}>

                        {(type) => ({y, opacity, ...props}) => {

                            var typeProps = {
                                key: type.id,
                                ...type,
                                y,
                                opacity,
                                loadTypes: this.loadTypes
                            }
                            return <Type {...typeProps} />   
                                
                        }}

                    </TypesAnimation>
                </section>
            </main>
        )
    }
}

export default RouteTypes