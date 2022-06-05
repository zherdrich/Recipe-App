import axios from "axios";
import { Results, Recipe } from "../models/id-model";

export default function getRecipes(
  query: string,
  intolerances?: string[]
): Promise<Recipe[] | void> {
  //instead of doing ApiKey=, do {params: apiKey: with the value of the apiKey}
  // added parameters and set to true to give more info within the query
  return axios
    .get<Results>(`https://api.spoonacular.com/recipes/complexSearch`, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        addRecipeNutrition: true,
        addRecipeInformation: true,
        query: query,
        intolerances: intolerances?.join(","),
      },
    })
    .then((response) => {
      return response.data.results;
    });
}
