import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import '../styles/Login.css';
import Image from '../images/register_bg.jpg';


class Register extends Component {
constructor() {
    super();
    this.state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        isLoggedIn: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfPasswordChange = this.handleConfPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleUsernameChange(event) {
    this.setState({username: event.target.value});
}

handleEmailChange(event) {
    this.setState({email: event.target.value});
}

handlePasswordChange(event) {
    this.setState({password: event.target.value});
}

handleConfPasswordChange(event) {
    this.setState({password2: event.target.value});
}

handleSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.password2) {
        alert("Passwords are not the same!");
    } else {
        let {username, email, password} = this.state;
        fetch("http://localhost:8000/users/", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: "same-origin",
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        })
        .then(res => {
            console.log(res);
            if(res.status === 200) {
                this.setState({isLoggedIn: true});        
                this.props.onAuthChange(true);
            }
        })
        .catch(err => {
        console.log(err.message);
        });
    }
}


    render() {
        let isLoggedIn = this.state.isLoggedIn;

        if(isLoggedIn) {
            return(<Redirect to="/store" />);
        }

        return (
            <div style={{backgroundImage: `url(${Image})`}} className="containerLogIn"> 
                <form style={{backgroundColor: '#000ecf'}} onSubmit={this.handleSubmit} className="jumbotron jumbotron-fluid m-0" id="login-form">
                    <div className="container" id="login-form-content">
                        <h1 className="text-center">Register</h1>
                        <div className="row">
                            <input 
                                className="form-control col-12 mb-3" 
                                id="email-login" 
                                type="text" 
                                placeholder="Username" 
                                value={this.state.username} 
                                onChange={this.handleUsernameChange} 
                                required/>
                            <input 
                                className="form-control col-12 mb-3" 
                                id="email-login" 
                                type="email" 
                                placeholder="Email" 
                                value={this.state.email} 
                                onChange={this.handleEmailChange} 
                                required/>
                            <input 
                                className="form-control col-12 mb-3" 
                                id="password-login" 
                                type="password" 
                                placeholder="Password" 
                                value={this.state.password} 
                                onChange={this.handlePasswordChange} 
                                required/>
                            <input 
                                className="form-control col-12 mb-3" 
                                id="password-login" 
                                type="password" 
                                placeholder="Confirm Password" 
                                value={this.state.password2} 
                                onChange={this.handleConfPasswordChange} 
                                required/>
                            <button 
                                style={{backgroundColor: '#990000'}}
                                className="btn btn-success col-4 mb-3 mx-auto">Register</button>
                            <span className="col-12 text-white text-center">Already have an account? <a href="/login">Login</a></span>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;