import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../actions";
import RecipeCard from "./RecipeCard";
import axios from "axios";

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Mapping of API categories to your custom categories
  const categoryMapping = {
    seafood: "Lunch",  // Assigning "seafood" to "Lunch"
    beef: "Lunch",     // Assigning "beef" to "Lunch"
    chicken: "Lunch",  // Assigning "chicken" to "Lunch"
    vegetarian: "Dinner", // Assigning "vegetarian" to "Dinner"
    pasta: "Dinner",      // Assigning "pasta" to "Dinner"
    dessert: "Breakfast", // Assigning "dessert" to "Breakfast"
    // Add more mappings as needed
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      console.log(res.data.meals); // Check the fetched meals to verify category data
      dispatch(setRecipes(res.data.meals || []));
    };
    fetchRecipes();
  }, [dispatch, search]);

  // Filter recipes based on the category mapping
  const filteredRecipes = recipes.filter((recipe) => {
    const recipeCategory = recipe.strCategory.trim().toLowerCase();
    const selectedCategory = category.trim().toLowerCase();

    // Map the recipe category using the category mapping
    const mappedCategory = categoryMapping[recipeCategory] || "Other"; // Default to "Other" if not found

    // If a category is selected, match it; otherwise, show all
    return selectedCategory ? mappedCategory.toLowerCase() === selectedCategory : true;
  });

  return (
    <div>
      <h2>Recipes</h2>
      <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
