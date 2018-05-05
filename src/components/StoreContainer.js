import React, { Component } from 'react';
import ItemList from './ItemList';
import JwPagination from 'jw-react-pagination';

class StoreContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
                data: [],
                pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
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
            this.setState({
                data: items
            })
        })
	}

	componentDidMount(){
		this.fetchProduct();
	}

	onChangePage(pageOfItems) {
        this.setState({ pageOfItems });
    }

	render() {
		return(
			<div className="container">
				<ItemList items={this.state.pageOfItems.slice(0,3)} />
				<ItemList items={this.state.pageOfItems.slice(3,6)} />
				<ItemList items={this.state.pageOfItems.slice(6,9)} />
				<JwPagination items={this.state.data} onChangePage={this.onChangePage} pageSize={10}/>
			</div>
		)
	}
}



export default StoreContainer;