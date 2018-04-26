import React, { Component } from 'react';
import '../styles/ItemCard.css';


class ItemCard extends Component {
    render () {
        return (
            <div className="ItemCard">
                <img className="ItemImage" src={require('../images/milo.jpg')}/>
                <div className="detail">
                    <h4>Nestle Milo</h4>
                    <p>Price: $5.30</p>
                    <hr />
                    <a href="#">More Information</a>
                </div>
            </div>
        )
    }
}


export default ItemCard;