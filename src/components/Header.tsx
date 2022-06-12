import { useContext, useState, useEffect } from "react";
import FavoriteContext from "../context/FavoriteContext";
import { Recipe } from "../models/id-model";
import getInfo from "../services/getInfo";
import "./Header.css";

export default function Header() {
  // useEffect(() => {
  //   getInfo(recipe.id).then((data) => {
  //     if (data) {
  //       setData(data);
  //     }
  //   });
  // }, []);

  const [showDiv, setShowDiv] = useState(false);
  const { favoriteArray, removeFavorite } = useContext(FavoriteContext);
  const [showFavoritesInfo, setShowFavoritesInfoDiv] = useState(false);
  return (
    <div className="Header">
      <img src="seedling-solid.svg" alt="" className="seedling" />
      <h1>Not Your Mothers Recipes</h1>
      <button className="favoritesButton" onClick={() => setShowDiv(true)}>
        <img src="simple-heart-2.svg" />
      </button>
      <div className={showDiv ? "favoritePage" : "No"}>
        <h2 className="favoriteHeader">Favorite Recipes</h2>
        <button onClick={() => setShowDiv(false)} className="exitButton">
          <img className="xbtnfav" src="xmark-solid.svg" />
        </button>
        {favoriteArray.map((recipe, index) => (
          <li className="favoritesContent" key={index}>
            {recipe.title}
            <img className="displayImage" src={recipe.image}></img>
            <button
              className="deleteButton"
              onClick={() => removeFavorite(recipe.id)}
            >
              <img src="trash-can-solid.svg" />
            </button>
            <button
              onClick={() => {
                setShowFavoritesInfoDiv(true);
              }}
            >
              Click here for more info
            </button>
          </li>
        ))}
      </div>
      <div className={showFavoritesInfo ? "RecipeInfoAnother" : "noAnother"}>
        <button
          id="xbuttonallAnother"
          onClick={() => setShowFavoritesInfoDiv(false)}
          className="exitButtonRecipe"
        >
          <img
            className="xbtnrecipeAnother"
            id="xbtnidAnother"
            src="xmark-solid.svg"
          />
        </button>
        {favoriteArray.map((recipe, index) => (
          <li key={index}>
          <p className="recipeInfoTitle">{recipe.title}</p>
          <p>Servings: {recipe.servings}</p>
          <p>Ready in: {recipe.readyInMinutes}</p> 
          <p>Vegetarian: {recipe.vegetarian === true ? "true" : "false"}</p>
          <p>Vegan: {recipe.vegan === true ? "true" : "false"}</p>
          
          <a id="recipelink" href={recipe.sourceUrl} target="_blank">
            Click here for recipe
          </a>
          </li>
        ))}
      </div>
    </div>
  );
}
