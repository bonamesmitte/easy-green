import React from 'react';
import '../recipe.css';

const RecipeScreen = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe-screen">
      <h1>{title}</h1>
      <button className="recipe-button">View Recipe</button>
      <p>{calories}</p>
      <img className="image" src={image} alt={title} />
      {/* <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol> */}
    </div>
  );
};

export default RecipeScreen;
