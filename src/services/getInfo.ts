import axios from "axios";
import { Information } from "../models/id-model";

export default function getInfo(
    id: number,
): Promise<Information | void> {
    return axios
    .get<Information>(`https://api.spoonacular.com/recipes/${encodeURIComponent(id)}/information`, {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,

        includeNutrition: true
      },
    })
    .then((response) => {
      return response.data;
    });

}