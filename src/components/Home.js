import React, { Component } from 'react';
import FeaturedItems from './FeaturedItems';
import '../styles/Home.css';


class Home extends Component {
    render() {
        return (
			<div>
				<div className="home-layout">
					<div className="banner">
						<h1 className="slogan">Getting you the best of Filipino Food</h1>
						<button className="button1"> <a href="/store">Shop Now </a></button>
					</div> 
					<div className="home-container">
						<div className="about">
							<h2>What is FilCrate?</h2>
							<p>Paragraphs are the building blocks of papers. 
								Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.
								In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. 
								A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). 
							</p>
							<div className="products">
								<div className="product">
									<img className="img1" src={require('../images/filcrate3.png')}/>
								</div>
								<div className="product">
									<img className="img2" src={require('../images/filcrate3.png')}/>
								</div>
							</div>
							<button className="button2"> Subscribe! </button>
						</div>
						<hr className="style-eight"/>
						<FeaturedItems />
					</div>
				</div>
			</div>
        );
    }
}

export default Home;