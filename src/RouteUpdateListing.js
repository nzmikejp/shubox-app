import React, { Component } from 'react'
import { navigate } from '@reach/router'
import API from './API'
import Listing from './Listing';

class RouteUpdateListing extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            listing:{}
        }
    }

    componentDidMount(){
        var {id} = this.props;
        API.getSingleListings(id).then(res => {
            this.setState({listing:res.data})
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        var formData = new FormData(this.form)

        var data = {
            brand:formData.get('brand'),
            name:formData.get('name'),
            price:formData.get('price'),
            //photo fileName,
            categorytype:formData.get('category-type'),
            gender:formData.get('gender'),
            description:formData.get('description')
        }
        var {id} = this.props;
        API.updateListing(id,data).then(res => navigate('/listings'))
    }   

    render(){   

        var {brand, name, price, categorytype, gender, description} = this.state.listing

        return(
            <section className="section-scroll route-update-listing">
                <div className="container">
                    <div className="header">
                        <h1>Update your Listing</h1>
                    </div>
                    <form action="#" className="pure-form pure-form-stacked" onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}}>
                        <div className="form-group">
                            <label htmlFor="brand">Brand:</label>
                            <input type="text" name="brand" id="brand" placeholder="Enter your brand name" defaultValue={brand}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Shoe style name:</label>
                            <input type="text" name="name" id="name" placeholder="Enter a style name" defaultValue={name}/>
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
                            <label htmlFor="category-type">Category Type:</label>
                            <select name="category-type" id="category-type" defaultValue={categorytype}>
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