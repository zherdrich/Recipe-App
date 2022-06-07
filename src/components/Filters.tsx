import "./Filters.css";
import { useState } from "react";
interface FilterState {
    dairyfree: boolean;
    vegetarian: boolean;
    glutenfree: boolean;
    shellfishfree: boolean;
    nutfree: boolean;
  }
export default function Filters() {
  const [filters, setFilters] = useState<FilterState>({
    dairyfree: false,
    vegetarian: false,
    glutenfree: false,
    shellfishfree: false,
    nutfree: false,
  })
  return (
    <div className="filterSection">
      <input id="vegetarian" type="checkbox"
      checked={filters.vegetarian}
      onClick={(e) => {
        setFilters({... filters, vegetarian: !filters.vegetarian});
      }}
      />
      <label htmlFor="vegetarian">Vegetarian</label>
      <input id="dairyfree" type="checkbox"
       checked={filters.dairyfree}
       onClick={(e) => {
         setFilters({... filters, dairyfree: !filters.dairyfree});
       }}
      />
      <label htmlFor="dairyfree">Dairy-Free</label>
      <input id="glutenfree" type="checkbox"
       checked={filters.glutenfree}
       onClick={(e) => {
         setFilters({... filters, glutenfree: !filters.glutenfree});
       }}
      />
      <label htmlFor="glutenfree">Gluten-Free</label>
      <input id="nutfree" type="checkbox"
       checked={filters.nutfree}
       onClick={(e) => {
         setFilters({... filters, nutfree: !filters.nutfree});
       }}
      />
      <label htmlFor="nutfree">Nut-Free</label>
      <input id="shellfishfree" type="checkbox"
      checked={filters.shellfishfree}
      onClick={(e) => {
        setFilters({... filters, shellfishfree: !filters.shellfishfree});
      }}
      />
      <label htmlFor="shellfishfree">Fish/Shellfish Free</label>
      <input id="calories" type="number"/>
      <label htmlFor="calories" placeholder="Max Calories">Calories: </label>
      <button type="submit" className="submit-btn btn" id="submit-btn">Enter</button>
    </div>
  );
}