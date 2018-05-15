import React, { Component } from 'react';
import '../styles/Header.css';
import AuthService from './AuthService';
import { Redirect } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 0,
            color: 'white',
            fil: 'white',
            crate: 'white',
            shadow: '',
            link: "/"
        }
        this.Auth = new AuthService;
        this.login = this.login.bind(this);
    }

    componentDidMount() {     
        window.scroll(0,0);
        if (window.location.pathname !== '/') {
            this.setState({
                opacity: 255,
                color: 'black',
                fil: '#990000',
                crate: '#000ecf',
                shadow: '0 5px 10px 0px gray'
            })
        }
        window.onscroll = () => {
            if (window.scrollY >= 100) {
                this.setState({
                    opacity: 255,
                    color: 'black',
                    fil: '#990000',
                    crate: '#000ecf'
                })
            }
            if ((window.scrollY < 100) && (window.location.pathname === '/')) {
                this.setState({
                    opacity: 0,
                    color: 'white',
                    fil: 'white',
                    crate: 'white'
                })
            }
        }
    }

     login(e) {
       // e.preventDefault();
       console.log(this.Auth.loggedIn());
        if(this.Auth.loggedIn()){
            this.Auth.logout();
        }else{
            this.setState({link: "/login"})
        }
    }
    
    render() {
        const x = this.state;
        let bg = `rgb(255,255,255,${x.opacity})`;

        if(this.state.redirected) {
            return(<Redirect to="/login" />);
        }
        return (
        	<div style={{backgroundColor: bg, boxShadow: x.shadow}} className="header-layout">
        		<div className="header-container">
                    <a href="/" className="header-logo">
                        <div className="logo text-center">
                            <span style={{color: x.fil}} className="header-fil">&nbsp;&nbsp;Fil</span>
                            <span style={{color: x.crate}} className="header-crate">Crate&nbsp;&nbsp;</span>
                        </div>
                    </a>
                    <a style={{color: x.color}} className="header-features" href="/crates">Crates</a>
                    <a style={{color: x.color}} className="header-features" href="/store">Store</a>
                    <a style={{color: x.color}} className="header-features" href={this.state.link} onClick={(e) => this.login(e)}>{(this.Auth.loggedIn()) ? "Logout" : "Login"}</a>
                    <a style={{color: x.color}} className="header-features" href="#">
                        <i style={{color: x.color}} className ="fa fa-shopping-cart header-features"></i>Cart
                    </a>      
                </div>
        	</div>
        );
    }
}

export default Header;