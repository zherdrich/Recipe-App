import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FavoriteContextProvider from "./context/FavoriteContextProvider";

function App() {
  return (
    <div className="App">
      <Header />
      <FavoriteContextProvider>
        <HomePage />
      </FavoriteContextProvider>
    </div>
  );
}

export default App;
