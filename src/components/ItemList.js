import React, { Component } from 'react';
import ItemCard from './ItemCard';

class ItemList extends Component {
	renderItemCards() {
		return(
			this.props.items.map(item => 
				<ItemCard 
					key={item.key}
					itemName={item.name}
					itemImage={item.image}
					itemPrice={item.price}
				/>
			)
		)
	}


	// this.renderItemCard() so that its always being called
	render() {
		return(
			<div>
				{this.renderItemCards()}
			</div>
		)
	}
}

export default ItemList;