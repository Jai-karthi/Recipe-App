import { combineReducers } from "redux";
import recipesReducer from "./recipesReducer";
import favoritesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  favorites: favoritesReducer,
});

export default rootReducer;