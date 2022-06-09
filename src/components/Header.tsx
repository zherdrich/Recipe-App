import { useContext, useState } from "react";
import FavoriteContext from "../context/FavoriteContext";
import "./Header.css";

export default function Header() {
  const [showDiv, setShowDiv] = useState(false)
  const {favoriteArray, removeFavorite}=useContext(FavoriteContext)
  return (
    <div className="Header">
      <img src="seedling-solid.svg" alt="" className="seedling" />
      <h1>Not Your Mothers Recipes</h1>
      <button onClick={() => setShowDiv(true)}>
        <img src="simple-heart-2.svg"/>
      </button>
      <div className="favoritePage">
      {favoriteArray.map((recipe, index) => <li key={index}>{recipe.title}</li>)}
      </div>
    </div>
  );
}
