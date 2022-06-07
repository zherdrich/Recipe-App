import { useState } from "react";
import "./Filters.css";
export default function Filters() {
  const [filteredIntolerences, setFilteredIntolerences] = useState([])

  function arrayPush() {
    
  }
  return (
    <div className="filterSection">
      <input onChange={arrayPush} id="vegetarian" type="checkbox" />
      <label htmlFor="vegetarian">Vegetarian</label>

      <input id="dairyfree" type="checkbox" />
      <label htmlFor="dairyfree">Dairy-Free</label>

      <input id="glutenfree" type="checkbox" />
      <label htmlFor="glutenfree">Gluten-Free</label>

      <input id="nutfree" type="checkbox" />
      <label htmlFor="nutfree">Nut-Free</label>

      <input id="shellfishfree" type="checkbox" />
      <label htmlFor="shellfishfree">Fish/Shellfish Free</label>
    </div>
  );
}
