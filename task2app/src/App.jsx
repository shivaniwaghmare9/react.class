

import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/insert";
import Display from "./pages/Display";

const App=()=>{
  return(
    <>
      <h1 align="center">Welcome To React Website!!!</h1>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="insert" element={<Insert/>}/>
              <Route path="display" element={<Display/>}/>

            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;