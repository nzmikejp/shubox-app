import React, { Component } from 'react'
import { navigate, Link } from '@reach/router'
import API from './API'

class RouteUpdateListing extends Component {
    constructor(props){
        super(props)
        this.state = {
            listing:{}
        }
    }

    componentDidMount(){
        var {id} = this.props
        API.getSingleListings(id).then(res => {
            this.setState({listing:res.data})
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        var formData = new FormData(this.form)

        var data = {
            brand:formData.get('brand'),
            name:formData.get('shoe-style'),
            price:formData.get('price'),
            // photo:formData.get('photo'),
            type_id:formData.get('shoe-type'),
            gender:formData.get('gender'),
            description:formData.get('description')
        }

        var {id} = this.props
        API.updateListing(id,data).then(res => navigate('/listings'))
    }

    render(){
        var {brand, name, description, price, gender, type_id, photo} = this.state.listing
        return(
            <section className="section-scroll route-update-listing">
                <div className="container">
                    <div className="header">
                        <h1>Update your Listing</h1>
                    </div>
                    <form action="#" className="pure-form pure-form-stacked" onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                        <div className="form-group">
                            <label for="brand">Brand:</label>
                            <input type="text" name="brand" id="brand" placeholder="Enter your brand name" defaultValue={brand}/>
                        </div>
                        <div className="form-group">
                            <label for="shoe-style">Shoe style name:</label>
                            <input type="text" name="shoe-style" id="shoe-style" placeholder="Enter a style name" defaultValue={name}/>
                        </div>
                        <div className="form-group">
                            <label for="price">Price:</label>
                            <input type="text" name="price" id="price" placeholder="Enter your price" defaultValue={price}/>
                        </div>
                        <div className="form-group">
                            <label for="photo">Photo:</label>
                            <input type="text" name="photo" id="photo"/>
                        </div>
                        <div className="form-group">
                            <label for="shoe-type">Shoe Type:</label>
                            <select name="shoe-type" id="shoe-type" defaultValue={type_id}>
                                <option value="1">Sneakers</option>
                                <option value="2">Runners</option>
                                <option value="3">Boots</option>
                                <option value="4">Kids</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="Gender">Gender</label>
                            <select name="gender" id="Gender" defaultValue={gender}>
                                <option value="Mens">Mens</option>
                                <option value="Womens">Womens</option>
                                <option value="Unisex">Unisex</option>
                                <option value="Kids Girls">Kids Girls</option>
                                <option value="Kids Boys">Kids Boys</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="description">Description:</label>
                            <textarea name="description" id="" cols="32" rows="5" placeholder="Enter your description" defaultValue={description}></textarea>
                        </div>
                        <div className="form-group with-btn">
                            <button type="submit" className="btn btn-gray">Update</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default RouteUpdateListing