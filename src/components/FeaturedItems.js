import React, { Component } from 'react';
import ItemCard from './ItemCard';
import '../styles/FeaturedItems.css';


class FeaturedItems extends Component {
    render () {
        return (
            <div className="featured">
                <div className="fi"> Featured Items </div>
                <div className="slide">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>
        )
    }
}


export default FeaturedItems;