import { Recipe } from "../models/id-model";
import EachRecipe from "./EachRecipe";
import "./RecipeList.css";
interface RecipeListProps {
  mealData: Recipe[];
}

export default function RecipeList({ mealData }: RecipeListProps) {
  return (
    <div className="recipelist">
      <h1 className="featuredRecipes">Featured Recipes</h1>
      <div className="recipeItems">
        {mealData.map((recipe, index) => {
          return <EachRecipe key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}
