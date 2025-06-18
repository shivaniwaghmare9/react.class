
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Display from "./pages/Display";
import Search from "./pages/Search";
import { ToastContainer } from "react-toastify";
const App=()=>{
  return(
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Display/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="search" element={<Search/>}/>

            </Route>
          </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}
export default App;