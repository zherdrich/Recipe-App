import { useState } from "react";
import "./Heart.css";

export default function Heart() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="wrapper">
      <button
        className="heart"
        style={{ backgroundColor: selected ? "red" : "gray" }}
        onClick={(e) => {
          setSelected(!selected);
        }}
      >
        <div
          className="left"
          style={{ backgroundColor: selected ? "red" : "gray" }}
        ></div>
        <div
          className="right"
          style={{ backgroundColor: selected ? "red" : "gray" }}
        ></div>
      </button>
    </div>
  );
}
