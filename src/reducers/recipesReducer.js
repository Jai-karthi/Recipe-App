const initialRecipesState = {
    recipes: [],
    filters: {},
  };
  
  const recipesReducer = (state = initialRecipesState, action) => {
    switch (action.type) {
      case "SET_RECIPES":
        return { ...state, recipes: action.payload };
      case "SET_FILTERS":
        return { ...state, filters: action.payload };
      default:
        return state;
    }
  };
  
  export default recipesReducer;
  