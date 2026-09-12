import { useState } from "react"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import Catalog from "./Components/Catalog"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Nav />
      <Hero />
      <Catalog />
      <h1 className="text-5xl text-red-500">Assignment-5</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
     
    </>
  )
}

export default App
