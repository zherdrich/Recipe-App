export interface Results {
  results: Recipe[];
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
}
export interface RandomResults {
  recipes: Recipe[];
}
