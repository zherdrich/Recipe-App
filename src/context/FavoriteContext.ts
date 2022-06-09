import { createContext } from "react";
import { FilterState, Recipe } from "../models/id-model";

interface FavoriteContextModel {
  recipeArray: Recipe[];
  filters: FilterState;
  favoriteArray: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe: (id: number) => void;
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (id: number) => void;
  updateFilter: (
    filter:
      | "dairyfree"
      | "vegetarian"
      | "glutenfree"
      | "shellfishfree"
      | "nutfree"
  ) => void;
}


const defaultValues: FavoriteContextModel = {
  recipeArray: [],
  favoriteArray: [],
  filters: {
    dairyfree: false,
    vegetarian: false,
    glutenfree: false,
    shellfishfree: false,
    nutfree: false,
  },
  addRecipe: () => {},
  removeRecipe: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
  updateFilter: (
    filter:
      | "dairyfree"
      | "vegetarian"
      | "glutenfree"
      | "shellfishfree"
      | "nutfree"
  ) => {},
};

const FavoriteContext = createContext(defaultValues);

export default FavoriteContext;
