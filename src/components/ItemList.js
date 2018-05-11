import React, { Component } from 'react';
import ItemCard from './ItemCard';

class ItemList extends Component {
	renderItemCards() {
		return(
			this.props.items.map(item => 
				<ItemCard 
					className="col-md-4 col-sm-6"
					key={item.key}
					itemId={item.id}
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
			<div className="row">
				{this.renderItemCards()}
			</div>
		)
	}
}

export default ItemList;