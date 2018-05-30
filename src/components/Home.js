import React, { Component } from 'react';
import '../styles/Home.css';


class Home extends Component {
    render() {
        return (
			<div>
				<div className="home-layout">
					<div className="banner">
						<h1 className="slogan">Getting you the best of Filipino Food</h1>
						<a className="button1" href="/store"><button className="button1">Shop Now</button></a>
					</div> 
					<div className="home-container">
						<div className="about">
							<h2>What is FilCrate?</h2>
							<hr className="style-eight"/>
							<br/>
							<p>
								FilCrate is an ecommerce site providing delicious Filipino snacks. FilCrate also provides a monthly subscription service where customers get a special package (or Crates) containing random selection of Filipino snacks. 
							</p>
							<div className="products">
								<div className="product">
									<img className="img1" src={require('../images/filcrate2.png')} alt=""/>
								</div>
								<div className="product">
									<img className="img2" src={require('../images/filcrate3.png')} alt=""/>
								</div>
							</div>
							<br/>
							<a className="button1" href="/crates"><button className="button2"> Subscribe! </button></a>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default Home;