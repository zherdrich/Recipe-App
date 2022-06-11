import { useState, useEffect } from "react";
import { Recipe, Information} from "../models/id-model";
import getInfo from "../services/getInfo";
import "./EachRecipe.css";
import Heart from "./Heart";

interface RecipeProps {
  recipe: Recipe;
}

interface InformationProps {
  information: Information;
}

export default function EachRecipe({ recipe }: RecipeProps) {
  const [data, setData] = useState<Information>();

  const [showDiv, setShowDiv] = useState(false);
  
  // getInfo(recipe.id).then((data) => {
  //   if (data) {
  //     setData(data)
  //   }
  // })

  useEffect(() => {
    getInfo(recipe.id).then((data) => {
      if (data) {
        setData(data);
      }
    });
  }, []);

  return (
    <div className="EachRecipe">

      <button onClick={() => setShowDiv(true)} className="MoreInfoBtn">More Info</button>

      <div className={showDiv ? "RecipeInfo" : "no"}>
        <p>{recipe.title}</p>
        <button onClick={() => {
          console.log(data)
        }}></button>
        <p>Servings: {recipe.servings}</p>
        <p>Ready in: {recipe.readyInMinutes}</p>
        <a href={recipe.sourceUrl} target="_blank">Click here for recipe information</a>
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
