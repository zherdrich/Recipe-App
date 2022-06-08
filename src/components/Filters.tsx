import "./Filters.css";
import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";

export default function Filters() {
  const { filters, updateFilter } = useContext(FavoriteContext);

  return (
    <div className="filterSection">
      <input
        id="vegetarian"
        type="checkbox"
        checked={filters.vegetarian}
        onClick={(e) => {
          updateFilter("vegetarian");
        }}
      />
      <label htmlFor="vegetarian">Vegetarian</label>
      <input
        id="dairyfree"
        type="checkbox"
        checked={filters.dairyfree}
        onClick={(e) => {
          updateFilter("dairyfree");
        }}
      />
      <label htmlFor="dairyfree">Dairy-Free</label>
      <input
        id="glutenfree"
        type="checkbox"
        checked={filters.glutenfree}
        onClick={(e) => {
          updateFilter("glutenfree");
        }}
      />
      <label htmlFor="glutenfree">Gluten-Free</label>
      <input
        id="nutfree"
        type="checkbox"
        checked={filters.nutfree}
        onClick={(e) => {
          updateFilter("nutfree");
        }}
      />
      <label htmlFor="nutfree">Nut-Free</label>
      <input
        id="shellfishfree"
        type="checkbox"
        checked={filters.shellfishfree}
        onClick={(e) => {
          updateFilter("shellfishfree");
        }}
      />
      <label htmlFor="shellfishfree">Fish/Shellfish Free</label>
      <input id="calories" type="number" />
      <label htmlFor="calories" placeholder="Max Calories">
        Calories:{" "}
      </label>
      <button type="submit" className="submit-btn btn" id="submit-btn">
        Enter
      </button>
    </div>
  );
}
