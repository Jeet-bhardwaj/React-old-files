import { useState } from "react"

function App() {
  const [value, setValue] = useState(1);
  const handleOnClick = () => {
    setValue(value + 1);
    console.log(value);
    console.log(setValue);
    console.log(setValue(value + 1));
  }
  return (
    <>
      <button onClick={handleOnClick}>ADD 1+</button>
      <h1>{value}</h1>
    </>
  )
}

export default App