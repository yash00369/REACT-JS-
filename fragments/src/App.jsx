import React from "react";

import FoodItems from "./components/fooditems";
import ErrorMessage from "./components/errormessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = ["DAl", "Green Vegetable", "ROLL", "Paneer", "Rajamah"];

  // let textStateArr = useState("Food Item Entered by User");

  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItem] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItem(newItems);
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>the above food Items are very good for health and well being.</p>
      </Container>
    </>
  );
}

export default App;
