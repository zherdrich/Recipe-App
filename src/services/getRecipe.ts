import axios from "axios";
import { Results, Recipe, RandomResults } from "../models/id-model";

export default function getRecipes(
  query: string,
  intolerances?: string[],
  diet?: string,
  calories?: number
): Promise<Recipe[] | void> {
  return axios
    .get<Results>(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        addRecipeNutrition: true,
        addRecipeInformation: true,
        query: query,
        intolerances: intolerances?.join(","),
        diet: diet,
        maxCalories: calories,
      },
    })
    .then((response) => {
      return response.data.results;
    });
}

export function getRandomRecipes(): Promise<Recipe[] | void> {
  return axios
    .get<RandomResults>(`https://api.spoonacular.com/recipes/random`, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        number: 9,
      },
    })
    .then((response) => {
      return response.data.recipes;
    });
}
