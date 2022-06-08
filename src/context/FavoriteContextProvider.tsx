import { useState, ReactNode } from "react";
import { FilterState, Recipe } from "../models/id-model";
import FavoriteContext from "./FavoriteContext";

interface Props {
  children: ReactNode;
}

// boilerplate
const FavoriteContextProvider = ({ children }: Props) => {
  const [recipeArray, setRecipeArray] = useState<Recipe[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    dairyfree: false,
    vegetarian: false,
    glutenfree: false,
    shellfishfree: false,
    nutfree: false,
  });
  //created a function called updateFilter that can only accept one if the values from the interface filterState.
  function updateFilter(
    filter:
      | "dairyfree"
      | "vegetarian"
      | "glutenfree"
      | "shellfishfree"
      | "nutfree"
  ) {
    //copied values
    let copiedFilters = { ...filters };
    //updated values
    copiedFilters[filter] = !copiedFilters[filter];
    //set new state
    setFilters(copiedFilters);
  }

  const addRecipe = (recipe: Recipe): void => {
    // copy then modify
    let copiedRecipeArray = [...recipeArray];
    copiedRecipeArray.push(recipe);
    setRecipeArray(copiedRecipeArray);
  };

  function removeRecipe(id: number): void {
    const index: number = recipeArray.findIndex((recipe) => recipe.id === id);
    // copy then modify
    let copiedRecipeArray = [...recipeArray];
    copiedRecipeArray.splice(index, 1);
    setRecipeArray(copiedRecipeArray);
  }
  return (
    <FavoriteContext.Provider
      value={{ recipeArray, filters, addRecipe, removeRecipe, updateFilter }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
