import { Suspense, useState } from "react"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
// import Catalog from "./Components/Catalog"
import ProgData from "./Components/ProgData"
import Footer from "./Components/Footer";


const progDataFetch = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      return data;
    };

function App() {
  const [count, setCount] = useState(0)
  const progDataPromise = progDataFetch();

  return (
    <>
      
      <Nav />
      <Hero />
            
      <Suspense fallback={<div>Loading programming data...</div>}>
      <ProgData progDataPromise={progDataPromise} />
      </Suspense>
      
      {/* <Catalog /> */}

      
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
     
     <Footer />
    </>
  )
}

export default App
