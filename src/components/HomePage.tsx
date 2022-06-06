import { useEffect, useState } from "react";
import { Recipe } from "../models/id-model";
import getRecipes, { getRandomRecipes } from "../services/getRecipe";
import Filters from "./Filters";
import "./HomePage.css";
import RecipeList from "./RecipeList";

export default function HomePage() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [mealData, setMealData] = useState<Recipe[]>([]);

  //https://css-tricks.com/run-useeffect-only-once/#aa-the-trick-is-that-useeffect-takes-a-second-parameter
  useEffect(() => {
    getRandomRecipes().then((data) => {
      if (data) {
        setMealData(data);
      }
    });
  }, []);

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
          className="search"
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
