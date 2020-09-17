import React from 'react';
import './recipe.css';

const Recipe = () => {
  const APP_ID = '7977c66b';
  const APP_KEY = 'bf1574bc7d5ca58f5a5b5b1d37367364';

  const exampleReq = `https://api.edamam.com/search?q=salad&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="recipe">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Recipes;
