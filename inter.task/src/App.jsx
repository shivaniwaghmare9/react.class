import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import ToDo from "./Pages/ToDo";
import Weather from "./Pages/Weather";
import Shopping from "./Pages/Shoppingcart";
import Counter from "./Pages/Counter";

const App=()=>{
  return(
    <>
     <BrowserRouter>
        <Routes>
              <Route path="/" element={<Layout/>}>
               <Route index  element={<Home/>}/>
               <Route path="home" element={<Home/>}/>
               <Route path="todo" element={<ToDo/>}/>
               <Route path="counter" element={<Counter/>}/>
               <Route path="weather" element={<Weather/>}/>
               <Route path="shopping" element={<Shopping/>}/>
              </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;