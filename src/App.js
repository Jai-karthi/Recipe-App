import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RecipeList from './components/RecipeList';
import Favorites from './components/Favorites';
import './App.css';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 > Recipe App</h1>
        <RecipeList />
        <Favorites />
      </div>
    </Provider>
  );
};
export default App;
