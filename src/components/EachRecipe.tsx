import { Recipe } from "../models/id-model";

interface RecipeProps {
  recipe: Recipe;
}
export default function EachRecipe({ recipe }: RecipeProps) {
  return (
    <div>
      <img src={recipe.image} alt="" />
    </div>
  );
}
