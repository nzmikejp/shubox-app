import React, {Component} from 'react'
import {navigate} from '@reach/router'
//import API from './API'

class RouteListingUpdate extends Component {
    
    constructor(props){
        super(props)
      }

      //handler formsubmit may need something added to update the listing for the current user
      handleFormSubmit = (e)=>{
          e.preventDefault()

          var formData = new FormData(this.form)

          var data = {
              brand:formData.get('brand-input'),
              shoestylename:formData.get('shoestylename-input'),
              price:formData.get('price-input'),
              image: fileName,
              shoetype:formData.get('showtype-input'),
              category:formData.get('category-input'),
              description:formData.get('description-input')
          }
          var {id} = this.props;
          API.updateListing(id,data).then(res => navigate('/Listings'))
      }



    render(){
        return (

        );
    }
}


export default RouteListingUpdate;