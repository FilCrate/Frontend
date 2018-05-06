import React, { Component } from 'react';
import '../styles/Header.css';


class Header extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 0,
            color: 255,
        }
    }

    componentDidMount () {     
        window.scroll(0,0); 
        window.onscroll = () => {
            const newScrollHeight = (Math.ceil(window.scrollY) / 2) * 0.01;
            // if (((255 - window.scrollY) >= 0) && ((255 - window.scrollY) <= 255)) {
            //     const newColor = (Math.ceil(255 - window.scrollY));
            //     this.setState({
            //         color: newColor
            //     })
            // }
            this.setState({
                opacity: newScrollHeight,
                color: newScrollHeight*1
            })
        }
    }
    
    render() {
        const x = this.state;
        let bg = `rgb(255,255,255,${x.opacity})`;
        let sColor = `rgb(${x.color},${x.color},${x.color})`;
        return (
        	<div style={{backgroundColor: bg}} className="header-layout">
<<<<<<< HEAD
        		<navbar className="header-container navbar navbar-expand-lg navbar-light bg-light">
                    <a href="/"><img className ="header-logo nav-link" src={require('../images/logo.png')} /></a>
                    <a style={{color: sColor}} className="header-features nav-link" href="/crates">Crates</a>
                    <a style={{color: sColor}} className="header-features nav-link" href="#">Stores</a>
                    <a style={{color: sColor}} className="header-features nav-link" href="/login">My Account</a>
                    <a style={{color: sColor}} className="header-features nav-link" href="#"> <i className ="fa fa-shopping-cart"></i> Cart</a>      
                </navbar>
=======
        		<div className="header-container">
                    <a href="/"><img className ="header-logo" src={require('../images/logo.png')} /></a>
                    <a style={{color: sColor}} className="header-features" href="#">Crates</a>
                    <a style={{color: sColor}} className="header-features" href="/store">Stores</a>
                    <a style={{color: sColor}} className="header-features" href="/login">My Account</a>
                    <a style={{color: sColor}} className="header-features" href="#"> <i className ="fa fa-shopping-cart"></i> Cart</a>      
                </div>
>>>>>>> b1d37ab24199d71ad048037eaaeb254f7bb12da8
        	</div>
        );
    }
}

export default Header;