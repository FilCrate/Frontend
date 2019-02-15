import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Reviews.css';

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readyState: 'pending',
      visibility: 'hidden',
      ratings: [],
    };
    this.getRating = this.getRating.bind(this);
  }

  componentDidMount() {
    this.getRating();
  }

  getRating() {
    if (this.props.productId) {
      this.setState({
        readyState: 'loading'
      });
      fetch(`http://localhost:8000/reviews/${this.props.productId}`).then(response => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      }).then(json => {
        this.setState({
          ratings: json,
          readyState: 'fulfilled'
        });
      }).catch(() => {
        this.setState({
          readyState: 'rejected'
        });
      });
    }
  }

  render () {
    return (
      <div className="Rating">
        <h2>Reviews</h2>
        {(this.state.readyState === 'pending' || this.state.readyState === 'loading') && (
          <p>Loading...</p>
        )}
        {this.state.readyState === 'fulfilled' && (
          <div>
            {/* <p>No ratings</p> Map into the ratings. No ratings if len = 0 */}
            <p>No ratings</p>
          </div>
        )}
        {(this.state.readyState === 'rejected') && (
          <p>No Reviews for this product.</p>
        )}
      </div>
    );
  }
}

Reviews.propTypes = {
  productId: PropTypes.number,
};

export default Reviews;