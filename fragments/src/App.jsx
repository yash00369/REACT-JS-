import React from "react";

import FoodItems from "./components/fooditems";
import ErrorMessage from "./components/errormessage";
import "./App.css";

function App() {
  let foodItems = ["DAl", "Green Vegetable", "ROLL", "Paneer", "Rajamah"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
