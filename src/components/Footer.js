import React, { Component } from 'react';
import '../styles/Footer.css';


class Footer extends Component {
    render() {
        return (
            <div className="myfooter">
                <p>FilCrate 2018 &copy;</p>
            	<a href="#" className="fa fa-facebook"></a>
				<a href="#" className="fa fa-instagram"></a>
            	<a href="#" className="fa fa-snapchat-ghost"></a>
            </div>					
        );
    }
}

export default Footer;