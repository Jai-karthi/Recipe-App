// Favorites.js
import React from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.favorites);

  return (
    <div>
      <h2>Favorites</h2>
      <div className="favorite-list">
        {favorites.length > 0 ? (
          favorites.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p>No favorites yet!</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
