  
  import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
  const App=()=>{
    return(
      <>
           <h1>React practice class!!!</h1>
           <BrowserRouter>
             <Routes>
              <Route path="/" element={<Layout/>}>
              <Route index  element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="counter" element={<Counter/>}/>

              </Route>
             </Routes>
           </BrowserRouter>
      </>
    )
  }
  export default App;