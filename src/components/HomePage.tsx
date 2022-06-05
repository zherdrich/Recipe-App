import { useState } from "react";
import { Recipe } from "../models/id-model";
import getRecipes from "../services/getRecipe";
import Filters from "./Filters";
import "./HomePage.css";
import RecipeList from "./RecipeList";

// use effect calls the function from getID
export default function HomePage() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [mealData, setMealData] = useState<Recipe[]>([]);

  function search() {
    getRecipes(searchInput).then((data) => {
      if (data) {
        setMealData(data);
      }
    });
  }

  return (
    <div className="HomePage">
      <div className="searchBar">
        <input
          id="searchbar"
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
          }}
        />
        <button onClick={search}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <Filters></Filters>
      <RecipeList mealData={mealData}></RecipeList>
    </div>
  );
}
