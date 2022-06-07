import { createContext } from "react";
import { Recipe } from "../models/id-model";

interface FavoriteContextModel {
  recipeArray: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
}

const defaultValues: FavoriteContextModel = {
    recipeArray: [],
    addRecipe: () => { },
    removeRecipe: () => { }
  }

  const FavoriteContext = createContext(defaultValues);

export default FavoriteContext;
