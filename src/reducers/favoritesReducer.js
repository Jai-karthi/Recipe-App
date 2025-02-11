// favoritesReducer.js

const initialFavoritesState = {
    favorites: [],
  };
  
  const favoritesReducer = (state = initialFavoritesState, action) => {
    switch (action.type) {
      case "ADD_FAVORITE":
        // Check if the recipe is already in favorites
        if (state.favorites.some((r) => r.idMeal === action.payload.idMeal)) {
          return state;  // Do not add again if already in favorites
        }
        return { ...state, favorites: [...state.favorites, action.payload] };
      case "REMOVE_FAVORITE":
        return { ...state, favorites: state.favorites.filter((r) => r.idMeal !== action.payload) };
      default:
        return state;
    }
  };
  
  export default favoritesReducer;
  