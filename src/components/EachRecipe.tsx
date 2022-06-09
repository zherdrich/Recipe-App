import { useState } from "react";
import { Recipe } from "../models/id-model";
import "./EachRecipe.css";
import Heart from "./Heart";

interface RecipeProps {
  recipe: Recipe;
}

export default function EachRecipe({ recipe }: RecipeProps) {
  return (
    <div className="EachRecipe">
      <p className="recipeTitle">{recipe.title}</p>
      <img src={recipe.image} alt="" />
      <Heart recipe={recipe}></Heart>
    </div>
  );
}
