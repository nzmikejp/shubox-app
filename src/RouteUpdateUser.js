import React, { Component } from 'react'
import API from './API'
import { navigate } from '@reach/router'

class RouteUpdateUser extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: {}
        }
    }

    componentDidMount(){
        var {id} = this.props
        API.getSingleUser(id).then(res => {
            this.setState({ user: res.data })
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        var formData = new FormData(this.form)
        var { loadCurrentUser, id } = this.props

        if(formData.get('profile-image').size > 0){

            API.uploadFile(formData)
            .then(res => res.data)
    
            .then(fileName => {
                
                var data = {
                    name: formData.get('name'),
                    username: formData.get('user-name'),
                    password: formData.get('user-password'),
                    photo: fileName,
                    email: formData.get('user-email'),
                }
    
                API.updateUser(id,data).then(res => {
                    loadCurrentUser()
                    navigate('/user/profile')
                })
            })

        }else{

            var data = {
                name: formData.get('name'),
                username: formData.get('user-name'),
                password: formData.get('user-password'),
                email: formData.get('user-email'),
            }

            API.updateUser(id,data).then(res => {
                loadCurrentUser()
                navigate('/user/profile')
            })
        }
    }

    handleDelete = () => {
        var { id,setCurrentUser } = this.props
        API.deleteUser(id).then(res => {
            localStorage.removeItem('userId')
            setCurrentUser(null)
            navigate('/')
        })
    }
    
    render(){

        var { name, username, password, email } = this.state.user

        return(
            <main>
                <section className="section-scroll route-update-user">
                    <div className="container">
                        <div className="header">
                            <h1>Update your Profile</h1>
                        </div>
                        <form onSubmit={ this.handleFormSubmit } ref={ (el) => { this.form = el } } className="pure-form pure-form-stacked">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" placeholder="Enter your name" defaultValue={ name }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-name">User Name:</label>
                                <input type="text" name="user-name" id="user-name" placeholder="Enter your username" defaultValue={ username }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="profile-image">Profile Image:</label>
                                <input type="file" name="profile-image" id="photo" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-email">Email:</label>
                                <input type="text" name="user-email" id="user-email" placeholder="Enter your username" defaultValue={ email }/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user-password">Password:</label>
                                <input type="password" name="user-password" id="user-password" placeholder="Enter your password" defaultValue={ password }/>
                            </div>
                            <div className="form-group with-btn">
                                <button type="submit" className="btn btn-gray">Update</button>
                            </div>
                        </form>
                        <hr className="divider-dark" />
                        <button className="btn btn-gray" onClick={ this.props.handleLogout }>Log out</button>
                        <hr className="divider-dark" />
                        <button className="btn btn-red btn-small" onClick={ this.handleDelete }>Delete Account</button>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteUpdateUser