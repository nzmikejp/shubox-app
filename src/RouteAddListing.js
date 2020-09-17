import React, { Component } from 'react'
import { Link, navigate } from '@reach/router'
import API from './API'

class RouteAddListing extends Component {
    constructor(props){
        super(props)
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        
        var formData = new FormData(this.form)

        API.uploadFile(formData)
        .then(res => res.data)
        .then(fileName => {
            var {currentUser} = this.props;
            var data = {
                brand:formData.get('brand'),
                name:formData.get('shoe_name'),
                price:formData.get('price'),
                description:formData.get('description'),
                gender:formData.get('gender'),
                shoe_type:formData.get('shoe_type'),
                photo: fileName,
                type_id:formData.get('type-input'),
                // user_id:currentUser.id
            }
            API.addListing(data).then(res => navigate('/listings'))
            
        })

    }

    render(){
        return(
            <section className="section-scroll route-create-listing">
                <div className="container">
                    <div className="header">
                        <h1>Create a Listing</h1>
                    </div>
                    <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}} className="pure-form pure-form-stacked">
                        <div className="form-group">
                            <label htmlFor="brand">Brand:</label>
                            <input type="text" name="brand" id="brand" placeholder="Enter your brand name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shoe_name">Shoe name:</label>
                            <input type="text" name="shoe_name" id="shoe_name" placeholder="Enter a name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="text" name="price" id="price" placeholder="Enter your price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="photo">Photo:</label>
                            <input type="file" name="photo" id="photo" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="shoe_type">Shoe Type:</label>
                            <select name="shoe_type" id="shoe_type">
                                <option value="1">Sneakers</option>
                                <option value="2">Runners</option>
                                <option value="3">Boots</option>
                                <option value="4">Kids</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Shoe Type:</label>
                            <select name="gender" id="gender">
                                <option value="Mens">Mens</option>
                                <option value="Womens">Womens</option>
                                <option value="Unisex">Unisex</option>
                                <option value="Kids Girls">Kids Girls</option>
                                <option value="Kids Boys">Kids Boys</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea name="description" id="" cols="32" rows="5" placeholder="Enter your description"></textarea>
                        </div>
                        <div className="form-group with-btn">
                            <button type="submit" className="btn btn-gray">Add</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default RouteAddListing