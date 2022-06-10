import { useState } from "react";
import { Recipe, Information} from "../models/id-model";
import getInfo from "../services/getInfo";
import "./EachRecipe.css";
import Heart from "./Heart";

interface RecipeProps {
  recipe: Recipe;
}

export default function EachRecipe({ recipe }: RecipeProps) {
  const [data, setData] = useState<Information>();

  const [showDiv, setShowDiv] = useState(false);
  
  getInfo(recipe.id).then((data) => {
    if (data) {
      setData(data)
    }
  })


  return (
    <div className="EachRecipe">

      <button onClick={() => setShowDiv(true)} className="MoreInfoBtn">More Info</button>

      <div className={showDiv ? "RecipeInfo" : "no"}>
        <button onClick={() => {
          console.log(data)
        }}>hello</button>
        <button onClick={() => setShowDiv(false)} className="exitButton">
          <img src="xmark-solid.svg" />
        </button>
      </div>

      <p className="recipeTitle">{recipe.title}</p>
      <img src={recipe.image} alt="" />
      <Heart recipe={recipe}></Heart>
    </div>
  );
}
