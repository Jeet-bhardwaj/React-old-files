import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Food from "./component/Food";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import FoodHeading from "./component/FoodHeading";

function App() {
 
  
  const [Fooditems, setTextValue] = useState([ "Fruit",
    "Eggs",
    "Meat",])


  const handleOnChange = (event) => {
    if(event.key == "Enter"){
      let newFooditem = event.target.value ;
      event.target.value ="";
      console.log(newFooditem);
      setTextValue([...Fooditems, newFooditem]);

    }
  };

  const onCleakDelete = (healthyFood) => {
    let updatedFoodItem = [...Fooditems];
    let index1 = Fooditems.indexOf(healthyFood);
    updatedFoodItem.splice(index1,1);
    setTextValue(updatedFoodItem);
  }

  return (
    <Container>
      <FoodHeading></FoodHeading>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <br />
      <Food Fooditems={Fooditems} onCleakDelete={onCleakDelete}></Food>
    </Container>
  );
}

export default App;
