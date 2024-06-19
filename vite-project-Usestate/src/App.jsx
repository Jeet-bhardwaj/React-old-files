import { useState } from "react"
import Componet from "./Componet";
function App() {
  const [value, setValue] = useState(1);
  const handleOnClick = () => {
    setValue(value + 1);
    // console.log(value);
    // console.log(setValue);
    // console.log(setValue(value + 1));
  }
  const handileOnSelect = (event) => {
    console.log(event.target.value);
  }
  return (
    <>
    <div> <button onClick={handleOnClick}>ADD 1+</button>
      <h1>{value}</h1>
    </div>

    <div>
        <input type="text" onSelect={handileOnSelect} />
    </div>

    <Componet props = {value}></Componet>
    </>
  )
}

export default App