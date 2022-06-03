import "./HomePage.css" 
// use effect calls the function from getID
export default function HomePage () {
    return (
        <div className="HomePage">
            <div className="searchBar">
                <input id="searchbar" type="text"/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="filterSection">
                <input id="vegetarian" type="checkbox"/>
                <label htmlFor="vegetarian">Vegetarian</label>

                <input id="dairyfree" type="checkbox"/>
                <label htmlFor="dairyfree">Dairy-Free</label>

                <input id="glutenfree" type="checkbox"/>
                <label htmlFor="glutenfree">Gluten-Free</label>

                <input id="nutfree" type="checkbox"/>
                <label htmlFor="nutfree">Nut-Free</label>

                <input id="shellfishfree" type="checkbox"/>
                <label htmlFor="shellfishfree">Fish/Shellfish Free</label>
            </div>
        </div>
    )
}