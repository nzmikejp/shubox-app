import React, {Component} from 'react'
import {navigate} from '@reach/router'
import {Keyframes,animated} from 'react-spring/renderprops'
import API from './API'

const FormInputAnimation = Keyframes.Trail({
    appear: [{x: 0, opacity: 1,delay: 250, from: {x: -50, opacity: 0}}]
})

const formInputs = [
    <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Enter your name" />
    </div>,
    <div className="form-group">
        <label htmlFor="user-name">User Name:</label>
        <input type="text" name="user-name" id="user-name" placeholder="Enter your username" />
    </div>,
    <div className="form-group">
        <label htmlFor="user-email">Email:</label>
        <input type="text" name="user-email" id="user-email" placeholder="Enter your username" />
    </div>,
    <div className="form-group">
        <label htmlFor="user-password">Password:</label>
        <input type="password" name="user-password" id="user-password" placeholder="Enter your password" />
    </div>,
    <div className="form-group with-btn">
        <button type="submit" className="btn btn-gray">Sign up</button>
    </div>
]

class RouteAddUser extends Component {

    handleFormSubmit = (e) => {
        e.preventDefault();
    
        var formData = new FormData(this.form);
        var data = {
          name:formData.get('name'),
          username:formData.get('user-name'),
          password:formData.get('user-password'),
          email:formData.get('user-email'),
        }
    
        API.addUser(data).then(res => {
            var user = res.data
            this.props.setCurrentUser(user)
            localStorage.setItem('userId',user.id)
            navigate('/user/profile') 
        })
      }

    render(){
        return(
            <main>
                <section className="section route-create-user">
                    <div className="container">
                        <img src="/images/shu-logo-small.png" alt="" />
                        <h1>Account Sign Up</h1>
                        <hr className="divider" />
                        <form onSubmit={this.handleFormSubmit} ref={(el) => {this.form = el}} className="pure-form pure-form-stacked">
                            <FormInputAnimation
                                native
                                items={formInputs}
                                keys={formInputs.map((_, i) => i)}
                                state={'appear'}>
                                {(item, i) => ({x, ...props}) => (
                                <animated.div
                                    style={{
                                    transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
                                    ...props,
                                    }}>
                                    {item}    
                                </animated.div>
                                )}
                            </FormInputAnimation>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

export default RouteAddUser