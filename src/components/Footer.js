import React, { Component } from 'react';
import '../styles/Footer.css';


class Footer extends Component {
    render() {
        return (
            <footer>
                <p>FilCrate 2018 &copy;</p>
            	<a href="#" className="fa fa-facebook"></a>
				<a href="#" className="fa fa-instagram"></a>
            	<a href="#" className="fa fa-snapchat-ghost"></a>
            </footer>					
        );
    }
}

export default Footer;