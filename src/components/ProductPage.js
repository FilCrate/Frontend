import React, { Component } from 'react';
import '../styles/ProductPage.css';
import Reviews from './Reviews';


class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readyState: 'pending',
            product: [],
        }
        this.getProduct = this.getProduct.bind(this);
        // this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentWillMount() {
        this.getProduct();
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    getProduct() {
        if (this.props.match.params.number) {
            this.setState({
                readyState: 'loading'
            });
            fetch(`http://localhost:8000/products/${this.props.match.params.number}`).then(response => {
                if (!response.ok) {
                    throw new Error();
                }
                return response.json();
            }).then(json => {
                this.setState({
                    product: json,
                    readyState: 'fulfilled'
                });
            }).catch(error => {
                this.setState({
                    readyState: 'rejected'
                })
            })
        }
    }

    render () {
        return (
            <div className="ProductPage">
                {(this.state.readyState === 'pending' || this.state.readyState === 'loading') && (
                    <p>Loading...</p>
                )}
                {this.state.readyState === 'fulfilled' && (
                    <div className="crates-content text-center">
                        <h2 className="ProductPage-title">{this.state.product.name}</h2> 
                        <hr className="style-eight"/>
                        <div className="ProductPage-container">
                            <div className="ProductPage-col1">
                                <img src={this.state.product.image} alt=""/>
                            </div>
                            <div className="info ProductPage-col2 text-left">
                                <p><span className="bold">Price: </span>${this.state.product.price}</p>
                                <p><span className="bold">Stock: </span>{this.state.product.stock}</p>
                                <p><span className="bold">Rating: </span>{this.state.product.rating}/5</p>
                                <p><span className="bold">Category: </span>{this.state.product.category}</p>
                                <p><span className="bold">Weight: </span>{this.state.product.weight} lbs</p>
                                <p><span className="bold">SKU: </span>{this.state.product.sku}</p>
                            </div>
                        </div>
                        <button>Add to cart</button>
                        <Reviews productId={this.props.match.params.number}/>
                    </div>
                )}
                {(this.state.readyState === 'rejected') && (
                    <p>Error loading product page.</p>
                )}
            </div>
        )
    }
}


export default ProductPage;