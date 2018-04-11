import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className = "home-layout">
            	<div className="banner">
    				<h1 className="slogan"> Slogan here!</h1>
       				<button className="button1"> Shop Now </button>
    				<button className="button2"> Subscribe! </button>
	    		</div>  
            	<div className="about">
                	<h1>What is FilCrate?</h1>
                	<p>Paragraphs are the building blocks of papers. 
                	Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc.
                	 In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. 
                	 A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). 
            		 </p>
                </div>

                <div className = "products">
					<div className = "product">
						<img className = "img1" src = {require('../images/box.jpg')}/>
					</div>

					<div className = "product">
						<img className = "img2" src = {require('../images/box.jpg')}/>
					</div>
				</div>

				<div className = "features">
					<div>  </div>
					<div>  </div>
					<div className ="fi"> Features Items </div>
					<div>  </div>
					<div>  </div>
					<div>  </div>
					<div className = "item">
						<img className = "i1" src = {require('../images/milo.jpg')}/>
						<h3> Nestle Milo </h3>
						<p> Price: $5.30 </p>			
					</div>
					<div>  </div>
					<div className = "item">
						<img className = "i1" src = {require('../images/milo.jpg')}/>
						<h3> Nestle Milo </h3>
						<p> Price: $5.30 </p>	
					</div>
					<div>  </div>
					<div className = "item">
						<img className = "i1" src = {require('../images/milo.jpg')}/>
						<h3> Nestle Milo </h3>
						<p> Price: $5.30 </p>	
					</div>
					<div>  </div>			
				</div>

            </div>
        );
    }
}

export default Home;