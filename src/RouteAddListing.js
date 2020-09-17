import React, { Component } from 'react'
import { navigate } from '@reach/router'
import API from './API'

class RouteAddListing extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault()

        var formData = new FormData(this.form)

        if(formData.get('photo').size > 0){

                API.uploadFile(formData)
                    .then(res => res.data)

                    .then(fileName => {
                        var data = {
                            brand:formData.get('brand'),
                            name:formData.get('name'),
                            price:formData.get('price'),
                            photo: fileName,
                            description:formData.get('description'),
                            category_id:formData.get('gender')
                        }
                        API.addListing(data).then(res => navigate('/listings'))
                    })
        
        }else{
            
                var data = {
                    brand:formData.get('brand'),
                    name:formData.get('name'),
                    price:formData.get('price'),
                    photo:'',
                    description:formData.get('description'),
                    category_id:formData.get('gender')
                }
                API.addListing(data).then(res => navigate('/listings'))
        }
    }

    render(){
        return(
            <section className="section-scroll route-create-listing">
                <div className="container">
                    <div className="header">
                        <h1>Create a Listing</h1>
                    </div>
                    <form action="#" className="pure-form pure-form-stacked" onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                        <div className="form-group">
                            <label htmlFor="brand">Brand:</label>
                            <input type="text" name="brand" id="brand" placeholder="Enter your brand name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Shoe style name:</label>
                            <input type="text" name="name" id="name" placeholder="Enter a style name" />
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
                            <label htmlFor="gender">Shoe Type:</label>
                            <select name="gender" id="gender">
                                <option value="1">mens</option>
                                <option value="2">womens</option>
                                <option value="3">unisex</option>
                                <option value="4">boys</option>
                                <option value="5">girls</option>
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