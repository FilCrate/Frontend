import React, { Component } from 'react';
import ItemList from './ItemList';
import JwPagination from 'jw-react-pagination';
import {Row, Col, Input} from 'react-materialize';
import '../styles/ItemCard.css';

class StoreContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pageOfItems: [],
      post: ''
    };
    this.onChangePage = this.onChangePage.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  fetchProduct() {
    fetch('http://localhost:8000/products/')
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
        });
      });
  }

  updatePost(evt) {
    this.setState({post: evt.target.value});
    this.fetchProduct2(this.state.post);
  }

  fetchProduct2(title) {
    fetch(`http://localhost:8000/products/search/q?title=${title}&category=`)
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
        });
      });
  }

  componentDidMount(){
    this.fetchProduct();
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems });
  }

  render() {
    return(
      <div className="search-container">
        <Row className="search">
          <Col s={12}>
            <Input placeholder="Items" value={this.state.post} onChange={this.updatePost}></Input>
          </Col>	
        </Row>
        <div className="row hue" id="results">
          <ItemList items={this.state.pageOfItems.slice(0,4)} />
          <ItemList items={this.state.pageOfItems.slice(4,8)} />
          <ItemList items={this.state.pageOfItems.slice(8,12)} />
          <div className="row" style={{ display: 'block' }}>
            <JwPagination items={this.state.data} onChangePage={this.onChangePage} pageSize={12}/>
          </div>
        </div>
      </div>
    );
  }
}



export default StoreContainer;