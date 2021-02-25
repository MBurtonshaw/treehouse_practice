import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
    state = {
        shellStars: 5,
        rating: 0
    }

  // Write a function that returns 5 Star components
    
    createStar = (props) => {
        const starArray = [];
        for (let i = 0; i < this.state.shellStars; i++) {
            this.key = i;
            starArray.push(<Star key={this.key+1} onClick={this.ratingHandler()}/>);
        } return(starArray);
    }
    
  // Write an event handler that updates the rating state.
    ratingHandler = (props) => {
        console.log('yo');
    }
  // Pass the function to a Star component via props

  render() {
    return (
      <ul className="course--stars">
        {this.createStar()}
      </ul>
    );
  }
}

export default StarRating;