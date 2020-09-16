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
        var {id} = this.props;
        API.getSingleListing(id).then(res => {
            this.setState({listing:res.data})
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        
        var formData = new FormData(this.form)

        var data = {
            brand:formData.get('brand'),
            name:formData.get('shoe_name'),
            price:formData.get('price'),
            gender:formData.get('gender'),
            type_id:formData.get('type-input'),
            description:formData.get('description')
        }

        var {id} = this.props;
        API.updateListing(id,data).then(res => navigate('/listings'))
    }

    render(){

        var {brand,description,name,price,gender,type_id} = this.state.listing
        return(
            <section className="section-scroll route-update-listing">
                <div className="container">
                    <div className="header">
                        <h1>Update your Listing</h1>
                    </div>
                    <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}} className="pure-form pure-form-stacked">
                        <div className="form-group">
                            <label htmlFor="brand">Brand:</label>
                            <input type="text" name="brand" id="brand" placeholder="Enter your brand name" defaultValue={brand}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="shoe_name">Shoe name:</label>
                            <input type="text" name="shoe_name" id="shoe_name" placeholder="Enter a name" defaultValue={name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="text" name="price" id="price" placeholder="Enter your price" defaultValue={price}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="photo">Photo:</label>
                            <input type="file" name="photo" id="photo"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="shoe-type">Shoe Type:</label>
                            <select name="shoe-type" id="shoe-type" defaultValue={type_id}>
                                <option value="1">Sneakers</option>
                                <option value="2">Runners</option>
                                <option value="3">Boots</option>
                                <option value="4">Kids</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Shoe Type:</label>
                            <select name="gender" id="gender" defaultValue={gender}>
                                <option value="Mens">Mens</option>
                                <option value="Womens">Womens</option>
                                <option value="Unisex">Unisex</option>
                                <option value="Kids Girls">Kids Girls</option>
                                <option value="Kids Boys">Kids Boys</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
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