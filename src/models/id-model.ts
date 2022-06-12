export interface Results {
  results: Recipe[];
}

export interface Recipe {
  id: number;
  title: string;
  apiKey: number;
  addRecipeNutrition: boolean;
  addRecipeInformation: boolean;
  uri: string;
  label: string;
  image: string;
  source: string;
  sourceUrl: string;
  url: string;
  query: string;
  intolerances: string;
  servings: string,
  readyInMinutes: number,
  summary: string,
  vegetarian: boolean,
  vegan: boolean,
}

export interface RandomResults {
  recipes: Recipe[];
}

export interface Information {
  id: number,
  title: string,
  sourceUrl: string,
  servings: string,
  readyInMinutes: number,
}

// export interface Ingredients {
//   extendedIngredients: []
// }

export interface FilterState {
  dairyfree: boolean;
  vegetarian: boolean;
  glutenfree: boolean;
  shellfishfree: boolean;
  nutfree: boolean;
}