import React, { Component } from 'react';
import {Card, CardTitle} from 'react-materialize';
import '../styles/ItemCard.css';

/*
    {this.props.itemImage}
    {this.props.itemName}
    {this.props.itemPrice}
*/

class ItemCard extends Component {

    getImage(){
        if(this.props.itemImage != null)
            return this.props.itemImage
        else
            return require('../images/milo.jpg');
    }


    render () {
        return (
            <Card className="card"
                header={<CardTitle image={this.getImage()}>Card Title</CardTitle>}
            >
            <p>{this.props.itemName}</p>
            <p>Price: ${this.props.itemPrice}</p>
            </Card> 
        )
    }
}


export default ItemCard;