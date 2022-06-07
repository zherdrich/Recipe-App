import { createContext } from "react";
import { Recipe } from "../models/id-model";

interface FavoriteContextModel {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
}

const defaultValues: FavoriteContextModel = {
    recipes: [],
    addRecipe: () => { },
    removeRecipe: () => { }
  }

  const FavoriteContext = createContext(defaultValues);

export default FavoriteContext;
