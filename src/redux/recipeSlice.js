import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const recipeSlice = createSlice({
  name: 'recipes',
  initialState: {
    list: [],
    favorites: [],
  },
  reducers: {
    setRecipes: (state, action) => {
      state.list = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (recipe) => recipe.idMeal !== action.payload
      );
    },
  },
});

export const { setRecipes, addToFavorites, removeFromFavorites } = recipeSlice.actions;
export default recipeSlice.reducer;

export const fetchRecipes = (query) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    dispatch(setRecipes(response.data.meals || []));
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
};
