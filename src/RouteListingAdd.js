import React, {Component} from 'react'
//import {Link} from '@reach/router'
//import API from './API'

class RouteListingAdd extends Component {
    
    constructor(props){
        super(props)
      }

      handleFormSubmit = (e) =>{
          e.preventDefault()

          var formData = new FormData(this.form)

          API.uploadFile(formdata)
            .then(res => res.data)
            
            .then(fileName => {
                var {currentUser} = this.props;
                var data = {
                    brand:formData.get('brand-input'),
                    shoestylename:formData.get('shoestylename-input'),
                    price:formData.get('price-input'),
                    //   image: not sure about this one within the handler
                    shoetype:formData.get('showtype-input'),
                    category:formData.get('category-input'),
                    description:formData.get('description-input')
                }
                API.addListing(data).then(res => navigate('/Listings'))
            })
      }


    render(){
        return (

            //Below Link is to get back to the Profile Page
            <Link to =""></Link>

        );
    }
}


export default RouteListingAdd;