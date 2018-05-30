import React, { Component } from 'react';
import '../styles/ItemCard.css';

class ItemCard extends Component {
    getImage(){
        if(this.props.itemImage != null)
            return this.props.itemImage
        else
            return require('../images/milo.jpg');
    }


    render () {
        return (
            <div className="card text-center">
                <a href={`/product/`+this.props.itemId}>
                    <img className="img" src={this.getImage()} alt="" />
                </a>
                <div className="info">
                    <a href={`/product/`+this.props.itemId}>{this.props.itemName}</a>
                    <p>Price: ${this.props.itemPrice}</p>
                </div>
            </div> 
        )
    }
}


export default ItemCard;