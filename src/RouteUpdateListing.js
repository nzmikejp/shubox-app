import React, {Component} from 'react'
import {navigate} from '@reach/router'
import {Keyframes,animated} from 'react-spring/renderprops'
import API from './API'


class RouteUpdateListing extends Component {
    constructor(props){
        super(props)

        this.state = {
            listing: {}
        }
    }

    componentDidMount(){
        var {id} = this.props
        API.getSingleListing(id).then(res => {
            this.setState({ listing: res.data })
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        var formData = new FormData(this.form)
        var {loadCurrentUser, id} = this.props

        if(formData.get('photo').size > 0){

            API.uploadFile(formData)
            .then(res => res.data)
    
            .then(fileName => {
                
                var data = {
                    brand: formData.get('brand'),
                    name: formData.get('shoe-style'),
                    description: formData.get('description'),
                    price: formData.get('price'),
                    photo: fileName,
                    type_id: formData.get('shoe-type'),
                    category_id: formData.get('category'),
                }
    
                API.updateListing(id,data).then(res => {
                    loadCurrentUser()
                    navigate('/user/profile')
                })
            })

        }else{

            var data = {
                brand: formData.get('brand'),
                name: formData.get('shoe-style'),
                description: formData.get('description'),
                price: formData.get('price'),
                type_id: formData.get('shoe-type'),
                category_id: formData.get('category'),
            }

            API.updateListing(id,data).then(res => {
                loadCurrentUser()
                navigate('/user/profile')
            })
        }
    }

    render(){
        const FormInputAnimation = Keyframes.Trail({
            appear: [{x: 0, opacity: 1,delay: 250, from: {x: -50, opacity: 0}}]
        })
        
        var {brand, name, description, price, type_id, category_id} = this.state.listing   
        
        const formInputs = [
            <div className="form-group">
                <label htmlFor="brand">Brand:</label>
                <input type="text" name="brand" id="brand" placeholder="Enter your brand name" defaultValue={brand} />
            </div>,
            <div className="form-group">
                <label htmlFor="shoe-style">Shoe style name:</label>
                <input type="text" name="shoe-style" id="shoe-style" placeholder="Enter a style name" defaultValue={name} />
            </div>,
            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input type="text" name="price" id="price" placeholder="Enter your price" defaultValue={price} />
            </div>,
            <div className="form-group">
                <label htmlFor="photo">Photo:</label>
                <input type="file" name="photo" id="photo"/>
            </div>,
            <div className="form-group">
                <label htmlFor="shoe-type">Shoe Type:</label>
                <select name="shoe-type" id="shoe-type" defaultValue={type_id}>
                    <option value="1">sneakers</option>
                    <option value="2">runners</option>
                    <option value="3">boots</option>
                    <option value="4">kids</option>
                </select>
            </div>,
            <div className="form-group">
                <label htmlFor="category">Shoe Type:</label>
                <select name="category" id="category" defaultValue={category_id}>
                    <option value="1">mens</option>
                    <option value="2">womens</option>
                    <option value="3">unisex</option>
                    <option value="4">girls</option>
                    <option value="4">boys</option>
                </select>
            </div>,
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="" cols="32" rows="5" placeholder="Enter your description" defaultValue={description}></textarea>
            </div>,
            <div className="form-group with-btn">
                <button type="submit" className="btn btn-gray">Update</button>
            </div>
        ]

        return(
            <main>
                <section className="section-scroll route-update-listing">
                    <div className="container">
                        <div className="header">
                            <h1>Update your Listing</h1>
                        </div>
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}} className="pure-form pure-form-stacked">
                            <FormInputAnimation
                                native
                                items={formInputs}
                                keys={formInputs.map((_, i) => i)}
                                state={'appear'}>
                                {(item, i) => ({x, ...props}) => (
                                <animated.div
                                    style={{
                                    transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                                    ...props,
                                    }}>
                                    {item}    
                                </animated.div>
                                )}
                            </FormInputAnimation>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteUpdateListing