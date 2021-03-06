import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import '../styles/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Snacks'
    };
  }

  render() {
    return(
      <div className="test1">
        <Row>
          <Input className="searchField" placeholder="Here"/>
          <Input className="selectField" type='select' defaultValue={this.state.value}>
            <option value=' '>All</option>
            <option value='Noodles'>Noodles</option>
            <option value='Snacks'>Snacks</option>
            <option value='Drinks'>Drinks</option>
            <option value='Bottled/Canned'>Bottled/Canned</option>
          </Input>
        </Row>
      </div>
    );
  }
	
}

export default Search;
