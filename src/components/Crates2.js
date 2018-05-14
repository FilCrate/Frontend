import React, { Component } from 'react';
import FeaturedItems from './FeaturedItems';

import '../styles/Crates2.css';


class Crates2 extends Component {
  constructor() {
    super();
    this.state = {
        search: ""
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }


  handleSearchChange(event) {
    this.setState({search: event.target.value});
  }

  handleSubmit(event) {
    // event.preventDefault();
    // let {search} = this.state;
    // fetch("/products", {
    //     method: "post",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     credentials: "same-origin",
    //     body: JSON.stringify({
    //         products:products
    //     })
    // })
    // .then(res => {
    //     if(res.status === 200) {
    //         this.setState({isLoggedIn: true});        
    //         this.props.onAuthChange(true);
    //     }
    // })
    // .catch(err => {
    // console.log(err.message);
    // });
  }


    render() {
        return (
        	<div>
  		  		<div onSubmit={this.handleSubmit} className="containerCrates">
  				    <div className="row">
    				    <div className="searchBarMain col-md-5">
                  <i className="material-icons searchBarSearchIcon Select">search</i>
                  <input 
                    type="text" 
                    name="header-search" 
                    value="" 
                    id="searchBarInput"
                    placeholder="Search..."
                    value={this.state.search} 
                    onChange={this.handleSearchChange} 
                    required />
                </div>    
          
  				      
                <div className="col-md-4">
  				        <div className="dropdown">
  						  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  						    Categories
  						  </button>
  						  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  						    <a className="dropdown-item" href="#">Fruit</a>
  						    <a className="dropdown-item" href="#">Sweet</a>
  						    <a className="dropdown-item" href="#">Snack</a>
  						  </div>
  						</div>
  				      </div>
  				    </div>

  				    <div className='row Products'>
    						<div className='product1 col-md-3'>
      						<div className='product_inner '>
        							<img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300' />
        							<p>Milo</p>
        							<p>Price $10</p>
       							<button>Add to basket</button>
      						</div>
      
      						<div className='product_overlay'>
        							<h2>Added to basket</h2>
        							<i className='fa fa-check'></i>
      						</div>
    						</div>
    
    						<div className='product2 col-md-3'>
     		 					<div className='product_inner'>
        							<img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
        							<p>Milo</p>
        							<p>Price $10</p>
        							<button>Add to basket</button>
      						</div>
     							
     							<div className='product_overlay'>
  					      		<h2>Added to basket</h2>
  					      		<i className='fa fa-check'></i>
      						</div>
    						</div>
   
   						<div className='product3 col-md-3'>
      						<div className='product_inner'>
        							<img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300' />
        							<p>Milo</p>
        							<p>Price $10</p>
       							<button>Add to basket</button>
      						</div>
      
      						<div className='product_overlay'>
        							<h2>Added to basket</h2>
        							<i className='fa fa-check'></i>
      						</div>
    						</div>
    
    						<div className='product4 col-md-3'>
     		 					<div className='product_inner'>
        							<img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
        							<p>Milo</p>
        							<p>Price $10</p>
        							<button>Add to basket</button>
      						</div>
     							
     							<div className='product_overlay'>
  					      		<h2>Added to basket</h2>
  					      		<i className='fa fa-check'></i>
      						</div>
    						</div>

                <div className='product5 col-md-3'>
                  <div className='product_inner'>
                      <img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
                      <p>Milo</p>
                      <p>Price $10</p>
                      <button>Add to basket</button>
                  </div>
                  
                  <div className='product_overlay'>
                      <h2>Added to basket</h2>
                      <i className='fa fa-check'></i>
                  </div>
                </div>

                <div className='product6 col-md-3'>
                  <div className='product_inner'>
                      <img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
                      <p>Milo</p>
                      <p>Price $10</p>
                      <button>Add to basket</button>
                  </div>
                  
                  <div className='product_overlay'>
                      <h2>Added to basket</h2>
                      <i className='fa fa-check'></i>
                  </div>
                </div>

                <div className='product7 col-md-3'>
                  <div className='product_inner'>
                      <img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
                      <p>Milo</p>
                      <p>Price $10</p>
                      <button>Add to basket</button>
                  </div>
                  
                  <div className='product_overlay'>
                      <h2>Added to basket</h2>
                      <i className='fa fa-check'></i>
                  </div>
                </div>

                <div className='product8 col-md-3'>
                  <div className='product_inner'>
                      <img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
                      <p>Milo</p>
                      <p>Price $10</p>
                      <button>Add to basket</button>
                  </div>
                  
                  <div className='product_overlay'>
                      <h2>Added to basket</h2>
                      <i className='fa fa-check'></i>
                  </div>
                </div>

                <div className='product9 col-md-3'>
                  <div className='product_inner'>
                      <img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
                      <p>Milo</p>
                      <p>Price $10</p>
                      <button>Add to basket</button>
                  </div>
                  
                  <div className='product_overlay'>
                      <h2>Added to basket</h2>
                      <i className='fa fa-check'></i>
                  </div>
                </div>

                <div className='product10 col-md-3'>
                  <div className='product_inner'>
                      <img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
                      <p>Milo</p>
                      <p>Price $10</p>
                      <button>Add to basket</button>
                  </div>
                  
                  <div className='product_overlay'>
                      <h2>Added to basket</h2>
                      <i className='fa fa-check'></i>
                  </div>
                </div>

                <div className='product11 col-md-3'>
                  <div className='product_inner'>
                      <img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
                      <p>Milo</p>
                      <p>Price $10</p>
                      <button>Add to basket</button>
                  </div>
                  
                  <div className='product_overlay'>
                      <h2>Added to basket</h2>
                      <i className='fa fa-check'></i>
                  </div>
                </div>

                <div className='product12 col-md-3'>
                  <div className='product_inner'>
                      <img src='https://www.jbrwholesale.com.sg/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/m/i/milo_packet_drinks_200_ml.jpg' width='300'/>
                      <p>Milo</p>
                      <p>Price $10</p>
                      <button>Add to basket</button>
                  </div>
                  
                  <div className='product_overlay'>
                      <h2>Added to basket</h2>
                      <i className='fa fa-check'></i>
                  </div>
                </div>

                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li>
                      <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>  
              </div>
  				</div>
			</div>
        );
    }
}

export default Crates2;