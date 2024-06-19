import TheUserContextProvider from "./context/TheUserContextProvider"
import Login from "./components/Login"


function App() {
 

  return (
    <>
    <TheUserContextProvider>
    <Login></Login>
    </TheUserContextProvider>
    </>
    
  )
}

export default App
