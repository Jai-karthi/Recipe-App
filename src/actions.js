export const setRecipes = (recipes) => ({
    type: "SET_RECIPES",
    payload: recipes,
  });
  
  export const addFavorite = (recipe) => ({
    type: "ADD_FAVORITE",
    payload: recipe,
  });
  
  export const removeFavorite = (recipeId) => ({
    type: "REMOVE_FAVORITE",
    payload: recipeId,
  });
  
  export const setFilters = (filters) => ({
    type: "SET_FILTERS",
    payload: filters,
  });