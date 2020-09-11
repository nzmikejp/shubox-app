import axios from 'axios';

var urlPrefix = 'http://localhost:4000/api'

var API = {
    
    serverUrl: 'http://localhost:4000/',
    
    getListings : () => {
        return axios.get(urlPrefix+'/listings')
    },
    getSingleListings : (id) => {
        return axios.get(urlPrefix+'/listings/'+id)
    },
    addListing : (data) => {
        return axios.post(urlPrefix+'/listings',data)
    },
    updateListing : (id,data) => {
        return axios.put(urlPrefix+'/listings/'+id,data)
    },
    deleteListing : (id) => {
        return axios.delete(urlPrefix+'/listings/'+id)
    },
    getTypes : () => {
        return axios.get(urlPrefix+'/types')
    },
    getSingleTypes : (id) => {
        return axios.get(urlPrefix+'/types/'+id)
    },
    getSingleUser : (id) => {
        return axios.get(urlPrefix+'/users/'+id)
    },
    addUser : (data) => {
        return axios.post(urlPrefix+'/users',data)
    },
    authenticate : (data) => {
        return axios.post(urlPrefix+'/users/authenticate',data)
    },
    uploadFile : (formData) => {
        var settings = {headers: {'Content-Type': 'multipart/form-data'}}
        return axios.post(urlPrefix+'/upload',formData,settings)
    }
}

export default API