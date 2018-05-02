import React, { Component } from 'react';
import ItemList from './ItemList';

class StoreContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
                data: [{}],
        };
	}

	fetchProduct() {
		fetch("http://localhost:8000/products/")
            .then((resp) => {
                if(resp.ok){
                    return resp.json();
                }else{
                    return [];
                }
            }).then((respJson) => {
            const items = respJson.map(item => {
                return item;
            });
			console.log(items);
            this.setState({
                data: items
            })
        })
	}

	render() {
		this.fetchProduct();
		return(
			<div>
				{this.state.data.map(item => {return item.name;})}
				<ItemList items={this.state.data} />
			</div>
		)
	}
}

export default StoreContainer;