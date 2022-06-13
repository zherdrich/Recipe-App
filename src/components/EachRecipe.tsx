import { useState, useEffect } from "react";
import { Recipe, Information } from "../models/id-model";
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

  // useEffect(() => {
  //   getInfo(recipe.id).then((data) => {
  //     if (data) {
  //       setData(data);
  //     }
  //   });
  // }, []);

  return (
    <div className="grid-container-element">
    <div className="EachItem">
      <div className={showDiv ? "RecipeInfo" : "no"}>
        <button
          id="xbuttonall"
          onClick={() => setShowDiv(false)}
          className="exitButtonRecipe"
        >
          <img className="xbtnrecipe" id="xbtnid" src="xmark-solid.svg" />
        </button>
        <div className="moreInfoText">
          <p className="recipeInfoTitle">{recipe.title}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Ready in: {recipe.readyInMinutes}</p> 
          <p>Vegetarian: {recipe.vegetarian === true ? "true" : "false"}</p>
          <p>Vegan: {recipe.vegan === true ? "true" : "false"}</p>
          
          <a id="recipelink" href={recipe.sourceUrl} target="_blank">
            Click here for recipe
          </a>
        </div>
      </div>

      <div className="EachRecipe">
        <button onClick={() => setShowDiv(true)} className="MoreInfoBtn">
          More Info
        </button>
        <div className="insideBox">
          <p className="recipeTitle">{recipe.title}</p>
          <img className="recipeImage" src={recipe.image} alt="" />
          <Heart recipe={recipe}></Heart>
        </div>
      </div>
    </div>
    </div>
  );
}
