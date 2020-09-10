import axios from 'axios';

var urlPrefix = 'http://localhost:4000/api'

var API = {
    serverUrl: 'http://localhost:4000/',
    
    getItems : () => {
        return axios.get(urlPrefix+'/items')
    },
    getSingleItems : (id) => {
        return axios.get(urlPrefix+'/items/'+id)
    },
    addItem : (data) => {
        return axios.post(urlPrefix+'/items',data)
    },
    updataItem : (id,data) => {
        return axios.put(urlPrefix+'/items/'+id,data)
    },
    deleteItem : (id) => {
        return axios.delete(urlPrefix+'/items/'+id)
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