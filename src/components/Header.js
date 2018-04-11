import React, { Component } from 'react';
import '../styles/Header.css';

import 'font-awesome/css/font-awesome.min.css';

import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Myaccount from './Myaccount';

class Header extends Component {
    render() {
        return (
        	<div className = "header-layout">
        		<div className = "container">
                    <img className ="logo" src = {require('../images/logo.png')} />
                    <a className="feature1" href="#">Crate</a>
                    <a className="feature2" href="#">Stores</a>
                    <a className="feature3" href="/Myaccount">My Account</a>
                    <a className="feature4" href="#"> <i className ="fa fa-shopping-cart"></i> Cart</a>      
                </div>
        		
        	</div>

        );
    }
}

export default Header;