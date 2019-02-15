import React, { Component } from 'react';
import '../styles/FeaturedItems.css';
import ItemList from './ItemList';
import ItemCard from './ItemCard';


class FeaturedItems extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.fetchProduct();
  }

  fetchProduct() {
    let val = [30,40,60];
    let items = [];
    val.map(x => {
      fetch(`http://localhost:8000/products/${x}`)
        .then((resp) => {
          if(resp.ok){
            return resp.json();
          }else{
            return [];
          }
        }).then((resp) => {
          items.push(resp);
        });
    }
    );
    this.setState({data: items});
  }
    
  renderItemCards() {
    return(
      this.state.data.map(item => 
        <ItemCard 
          className="col-md-4 col-sm-6"
          key={item.key}
          itemId={item.id}
          itemName={item.name}
          itemImage={item.image}
          itemPrice={item.price}
        />
      )
    );
  }

  render () {
    console.log('BAKA',this.state.data);
    return (
      <div className="featured">
        <div className="fi"> Featured Items </div>
        {(this.state.data.length != 0 ) && (this.renderItemCards())
        }
      </div>
    );
  }
}




export default FeaturedItems;