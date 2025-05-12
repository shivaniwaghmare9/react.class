

import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
// import Home from "./pages/Home";
// import MyCart from "./pages/MyCart";
const App=()=>{
    return(
        <>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              {/* <Route index element={<Home/>}/> */}
              {/* <Route path="home" element={<Home/>}/>
              <Route path="mycart" element={<MyCart/>}/> */}
              

            </Route>
          </Routes>
         </BrowserRouter>
        </>
    )
}
export default App;