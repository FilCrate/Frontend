import React, { Component } from 'react';
import '../styles/Crates.css';


class Crates extends Component {
    render() {
        return (
			<div>
				<div className="crates-banner">
                    <div className="crates-center">
                        <div className="crates-banner-left">
                            <img className="crates-bannerimg" src={require('../images/filcrate3.png')} alt=""/>
                        </div>
                        <div className="crates-banner-right">
                            <h1>Exprience a wide variety of Philippine snacks delivered to you monthly!</h1>
                        </div>
                    </div>
                    <img className="crates-banner-c9 floating" src={require('../images/cloud9.png')} alt=""/>
                    <img className="crates-banner-canton floating" src={require('../images/canton_yellow.png')} alt=""/>
                    <img className="crates-banner-piattos floating" src={require('../images/piattos_green.png')} alt=""/>
                </div>
                <div className="crates-content">
                    <div className="crates-about">
                        <h3>About Our Monthly Crates</h3>
                        <p>We love Filipino snacks! Here at FilCrate, you can experience what the Philippines has to offer through monthly crates filled with snacks, sweets, noodles, and other goodies. Every month is different so let us know which ones are your favorites!</p>
                        <div className="crates-about-row">
                            <div className="crates-about-col1">
                                <i className ="material-icons crates-icons">public</i>
                                <h5>Free Shipping</h5>
                                <p>Crates ship for free around the world</p>
                            </div>
                            <div className="crates-about-col2">
                                <i className ="material-icons crates-icons">access_time</i>
                                <h5>Cancel Anytime</h5>
                                <p>You can cancel your subscription anytime</p>
                            </div>
                        </div>
                    </div>
                    <hr className="style-eight"/>
                    <div className="crates-select">
                        <h3>Select your crate</h3>
                        <p>FilCrate offers three subscription plans. Each tier offers a different variety of goodies!</p>
                        <div className="crates-select-row">
                            <div className="crates-select1">
                                <h5>Standard Crate</h5>
                                <img className="crates-selectimg" src={require('../images/filcrate1.png')} alt=""/>
                                <p>Contains:</p>
                                <ul>
                                    <li>Two medium-sized chips snack</li>
                                    <li>Two ramen noodles</li>
                                    <li>One candy snack</li>
                                </ul>
                                <div className="crates-price">
                                    <p>$10/month</p>
                                    <button>Get Standard Crate</button>
                                </div>
                            </div>
                            <div className="crates-select2">
                                <h5>Premium Crate</h5>
                                <img className="crates-selectimg" src={require('../images/filcrate2.png')} alt=""/>
                                <p>Contains:</p>
                                <ul>
                                    <li>Three full-sized chips snack</li>
                                    <li>Three ramen noodles</li>
                                    <li>Two candy snack</li>
                                    <li>A special random goodie!</li>
                                </ul>
                                <div className="crates-price">
                                    <p>$20/month</p>
                                    <button>Get Premium Crate</button>
                                </div>
                            </div>
                            <div className="crates-select3">
                                <h5>VIP Crate</h5>
                                <img className="crates-selectimg" src={require('../images/filcrate3.png')} alt=""/>
                                <p>Contains:</p>
                                <ul>
                                    <li>Four or more full-sized chips snack</li>
                                    <li>Four or more ramen noodles</li>
                                    <li>Three or more candy snack</li>
                                    <li>Filipino canned foods</li>
                                    <li>A special random goodie!</li>
                                </ul>
                                <div className="crates-price">
                                    <p>$30/month</p>
                                    <button>Get VIP Crate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        );
    }
}

export default Crates;