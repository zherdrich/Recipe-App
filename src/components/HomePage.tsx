import { delimiter } from "node:path/win32";
import { useContext, useEffect, useState } from "react";
import FavoriteContext from "../context/FavoriteContext";
import { Recipe } from "../models/id-model";
import getRecipes, { getRandomRecipes } from "../services/getRecipe";
import Filters from "./Filters";
import Header from "./Header";
import "./HomePage.css";
import RecipeList from "./RecipeList";


export default function HomePage() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [mealData, setMealData] = useState<Recipe[]>([]);
  const { filters } = useContext(FavoriteContext);
  const [calories, setCalories] = useState(500);

  //https://css-tricks.com/run-useeffect-only-once/#aa-the-trick-is-that-useeffect-takes-a-second-parameter
  useEffect(() => {
    getRandomRecipes().then((data) => {
      if (data) {
        setMealData(data);
      }
    });
  }, []);

  function search() {
    //todo: add calories to this request
    let intolerances = [];
    let diet = "";
    if (filters.dairyfree) {
      intolerances.push("Dairy");
    }
    if (filters.glutenfree) {
      intolerances.push("Gluten");
      intolerances.push("Wheat");
    }
    if (filters.nutfree) {
      intolerances.push("Peanut");
      intolerances.push("Tree Nut");
    }
    if (filters.shellfishfree) {
      intolerances.push("Shellfish");
    }
    if (filters.vegetarian) {
      diet = "vegetarian";
    }
    getRecipes(searchInput, intolerances, diet, calories).then((data) => {
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
      <Filters calories={calories} setCalories={setCalories}></Filters>
      <RecipeList mealData={mealData}></RecipeList>

    </div>
  );
}
