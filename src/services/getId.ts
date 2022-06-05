import axios from "axios";
import IdNumber from "../models/id-model";
import { useState } from "react";

export default function getId() {
    const [id, setId] = useState<IdNumber>();
    axios
      .get("https://api.spoonacular.com/recipes/complexSearch?apiKey=9ee1581e34964d5d921ea6cc4fe71b37")
      .then((response) => {
    console.log(response.data)
});
}
