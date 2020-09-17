import React, { Component } from 'react';
import '../recipe.css';

class RecipeDetail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/recipes');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="recipe-detail">
          {' '}
          <h1>{location.state.title}</h1>
          <img className="detail-image" src={location.state.image} />
          <a href={location.state.url}>
            {' '}
            <br />
            <br />
            <br />
            <button className="recipe-button">View Recipe</button>
          </a>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default RecipeDetail;
