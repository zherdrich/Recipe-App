import "./Filters.css";
export default function Filters() {
  return (
    <div className="filterSection">
      <input id="vegetarian" type="checkbox" />
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
