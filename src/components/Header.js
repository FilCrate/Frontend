import React, { Component } from 'react';
import '../styles/Header.css';


class Header extends Component {
    constructor() {
        super();
        this.state = {
            opacity: 0,
            color: 'white',
            fil: 'white',
            crate: 'white'
        }
    }

    componentDidMount() {     
        window.scroll(0,0);
        if (window.location.pathname !== '/') {
            this.setState({
                opacity: 255,
                color: 'black',
                fil: '#990000',
                crate: '#000ecf'
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
    
    render() {
        const x = this.state;
        let bg = `rgb(255,255,255,${x.opacity})`;
        return (
        	<div style={{backgroundColor: bg}} className="header-layout">
        		<div className="header-container">
                    <a href="/" className="header-logo">
                        <div className="logo text-center">
                            <span style={{color: x.fil}} className="header-fil">&nbsp;&nbsp;Fil</span>
                            <span style={{color: x.crate}} className="header-crate">Crate&nbsp;&nbsp;</span>
                        </div>
                    </a>
                    <a style={{color: x.color}} className="header-features" href="/crates">Crates</a>
                    <a style={{color: x.color}} className="header-features" href="/store">Store</a>
                    <a style={{color: x.color}} className="header-features" href="/login">My Account</a>
                    <a style={{color: x.color}} className="header-features" href="#">
                        <i style={{color: x.color}} className ="fa fa-shopping-cart header-features"></i>Cart
                    </a>      
                </div>
        	</div>
        );
    }
}

export default Header;