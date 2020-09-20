import React from 'react';
import { Link } from 'react-router-dom';
import '../cssStyle/recipe.css';

const RecipeScreen = ({ title, image, ingredients, url }) => {
  return (
    <Link
      to={{
        pathname: '/recipe-detail',
        state: {
          title,
          image,
          ingredients,
          url,
        },
      }}
    >
      <div className="recipe-screen">
        <h1>{title}</h1>
        {/* <img className="image" src={image} alt={title} /> */}
        {/* <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol> */}
      </div>
    </Link>
  );
};

export default RecipeScreen;
