import React, { Component } from 'react';
import '../styles/Header.css';


class Header extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 0,
            color: 0,
        }
    }

    componentDidMount () {     
        window.scroll(0,0); 
        window.onscroll = () => {
            const newScrollHeight = (Math.ceil(window.scrollY) / 2) * 0.01;
            if (((255 - window.scrollY) >= 0) && ((255 - window.scrollY) <= 255)) {
                const newColor = (Math.ceil(255 - window.scrollY));
                this.setState({
                    color: newColor
                })
            }
            this.setState({
                opacity: newScrollHeight
            })
        }
    }
    
    render() {
        const x = this.state;
        let bg = `rgb(255,255,255,${x.opacity})`;
        let sColor = `rgb(${x.color},${x.color},${x.color})`;
        return (
        	<div style={{backgroundColor: bg}} className="header-layout">
        		<div className="header-container">
                    <img className ="header-logo" src = {require('../images/logo.png')} />
                    <a style={{color: sColor}} className="header-features" href="#">Crates</a>
                    <a style={{color: sColor}} className="header-features" href="#">Stores</a>
                    <a style={{color: sColor}} className="header-features" href="/login">My Account</a>
                    <a style={{color: sColor}} className="header-features" href="#"> <i className ="fa fa-shopping-cart"></i> Cart</a>      
                </div>
        	</div>
        );
    }
}

export default Header;