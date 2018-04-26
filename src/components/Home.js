import React, { Component } from 'react';
import FeaturedItems from './FeaturedItems';
import Footer from './Footer';
import '../styles/Home.css';

class Home extends Component {
    render() {
        return (
			<div>
				<div className="home-layout">
					<div className="banner">
						<h1 className="slogan"> Slogan here!</h1>
						<button className="button1"> Shop Now </button>
						<button className="button2"> Subscribe! </button>
					</div> 
					<div className="home-container">
						<div className="about">
							<h1>What is FilCrate?</h1>
							<p>Paragraphs are the building blocks of papers. 
								Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.
								In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. 
								A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). 
							</p>
							<div className="products">
								<div className="product">
									<img className="img1" src={require('../images/box.jpg')}/>
								</div>
								<div className="product">
									<img className="img2" src={require('../images/box.jpg')}/>
								</div>
							</div>
						</div>
						<hr className="style-eight"/>
						<FeaturedItems />
					</div>
				</div>
				<Footer />
			</div>
        );
    }
}

export default Home;