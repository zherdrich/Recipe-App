import { useState } from "react";
import { Recipe } from "../models/id-model";
import "./EachRecipe.css"

interface RecipeProps {
  recipe: Recipe;
}
export default function EachRecipe({ recipe }: RecipeProps) {
  const [selectedRecipe, setSelectedRecipe] = useState(false)
  return (
    <div className="EachRecipe">
      <p>{recipe.title}</p>
      <img src={recipe.image} alt=""/>
      <img className={selectedRecipe ? "Selected" : "EachRecipe heart"} onClick={() => {
        setSelectedRecipe(selectedRecipe => !selectedRecipe)
      }} src="simple-heart-2.svg"/>
    </div>
  );
}
