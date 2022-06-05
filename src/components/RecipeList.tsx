import { Recipe } from "../models/id-model";
import EachRecipe from "./EachRecipe";
interface RecipeListProps {
  mealData: Recipe[];
}

export default function RecipeList({ mealData }: RecipeListProps) {
  return (
    <div>
      <h1>Recipes here</h1>
      {mealData.map((recipe, index) => {
        return <EachRecipe key={index} recipe={recipe} />;
      })}
    </div>
  );
}
