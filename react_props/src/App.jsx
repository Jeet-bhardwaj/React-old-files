import Items from "./component/Items";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let ar = [
    "Pizza",
    "Burger",
    "Sushi",
    "Pasta",
    "Salad",
    "Steak",
    "Tacos",
    "Curry",
    "Fried Chicken",
    "Ramen",
    "Sandwich",
    "Burrito",
    "Pad Thai",
    "Lasagna",
    "Sushi",
    "Dumplings",
    "Fajitas",
    "Soup",
    "Wings",
    "Nachos",
  ];

  return (
    <>
      <center>
        <h1>food Items</h1>
      </center>
      <Items item={ar}></Items>
    </>
  );
}

export default App;
