import FoodItemsList from "./FoodItemsList";
import "bootstrap/dist/css/bootstrap.min.css";

function Food({Fooditems , onCleakDelete}) {

  if (Fooditems.length === 0) {
    return <h1>I am still hungary</h1>;
  }

  return (
    <>
      <ul className="list-group">
        {Fooditems.map((item) => (
          <FoodItemsList key = {item} healthyFood = {item} onClickDelete={onCleakDelete} />
        ))}
      </ul>
    </>
  );
}

export default Food;
