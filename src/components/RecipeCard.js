// RecipeCard.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory}</p>
      {/* Add to favorites */}
      <button onClick={() => dispatch(addFavorite(recipe))}>Add to Favorites</button>
      {/* Remove from favorites */}
      <button onClick={() => dispatch(removeFavorite(recipe.idMeal))}>Remove from Favorites</button>
    </div>
  );
};

export default RecipeCard;
