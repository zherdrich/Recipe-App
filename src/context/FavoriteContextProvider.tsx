import { useState, ReactNode } from "react";
import { Recipe } from "../models/id-model";
import FavoriteContext from "./FavoriteContext"

interface Props {
    children: ReactNode;
}

// boilerplate
const FavoriteContextProvider = ({ children }: Props) => {
	const [recipeArray, setRecipeArray] = useState<Recipe[]>([]);

	function addRecipe (recipe: Recipe): void {
        // copy then modify
        let copiedRecipeArray = [...recipeArray];
        copiedRecipeArray.push(recipe);
        setRecipeArray(copiedRecipeArray);

        // // OR
        // let copiedOrder = [...order, item];
        // setOrder(copiedOrder);

        // // OR
		// setOrder((prev) => [...prev, item]);
	};
    
	function removeRecipe(id: number): void {
		const index: number = recipeArray.findIndex((recipe) => recipe.id === id);
        // copy then modify
        let copiedRecipeArray = [...recipeArray];
        copiedRecipeArray.splice(index, 1);
        setRecipeArray(copiedRecipeArray);

        // // OR
		// setOrder((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
	};
	return (
		<FavoriteContext.Provider value={{recipeArray, addRecipe, removeRecipe}}>
			{children}
		</FavoriteContext.Provider>
	);
};

export default FavoriteContextProvider;