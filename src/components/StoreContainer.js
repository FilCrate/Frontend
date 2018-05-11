import React, { Component } from 'react';
import ItemList from './ItemList';
import JwPagination from 'jw-react-pagination';
import '../styles/ItemCard.css';

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
			<div className="row" id="results">
				<ItemList items={this.state.pageOfItems.slice(0,4)} />
				<ItemList items={this.state.pageOfItems.slice(4,8)} />
				<ItemList items={this.state.pageOfItems.slice(8,12)} />
				<div className="row" style={{ display: 'block' }}>
					<JwPagination items={this.state.data} onChangePage={this.onChangePage} pageSize={12}/>
				</div>
			</div>
		)
	}
}



export default StoreContainer;