import { useContext, useState } from "react";
import "./Heart.css";
import { Recipe } from "../models/id-model";
import FavoriteContext from "../context/FavoriteContext";

interface RecipeProps {
  recipe: Recipe;
}

export default function Heart({recipe} : RecipeProps) {
  const [selected, setSelected] = useState(false);
  const {favoriteArray, addFavorite, removeFavorite}=useContext(FavoriteContext)
  
  function functionality () {
    if (selected === true) {
      setSelected(false)
      removeFavorite(recipe.id)
    } else {
      setSelected(true)
    }
  }

  return (
    <div className="wrapper">
      <button
        className="heart"
        style={{ backgroundColor: selected ? "red" : "grey" }}
        onClick={() => {
          addFavorite(recipe)
          functionality();
          console.log(favoriteArray)
        }}
      >
        <div
          className="left"
          style={{ backgroundColor: selected ? "red" : "grey" }}
        ></div>
        <div
          className="right"
          style={{ backgroundColor: selected ? "red" : "grey" }}
        ></div>
      </button>
    </div>
  );
}
