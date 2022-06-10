import axios from "axios";
import { Results, Recipe, RandomResults } from "../models/id-model";

export default function getInfo(
    id: number,
) {
    return axios
    .get<Results>(`https://api.spoonacular.com/recipes/{id}/information`, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        id: id,
        includeNutrition: true
      },
    })
    .then((response) => {
      return response.data.results;
    });

}
