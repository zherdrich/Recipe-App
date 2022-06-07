import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <img src="seedling-solid.svg" alt="" className="seedling" />
      <h1>Not Your Mothers Recipes</h1>
      <button>
        <img src="simple-heart-2.svg"/>
      </button>
    </div>
  );
}
