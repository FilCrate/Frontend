import React, { Component } from 'react';
import {Card, CardTitle} from 'react-materialize';
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
            <div className="card">
                <div className="text-center">
                    <img className="img" src={this.getImage()} />
                    <p>{this.props.itemName}</p>
                    <p>Price: ${this.props.itemPrice}</p>
                </div>
            </div> 
        )
    }
}


export default ItemCard;