import {BrowserRouter, Routes, Route} from "react-router-dom";
import FrontPage from "../components/FrontPage";
import Presupuesto from "../Presupuesto/Presupuesto";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<FrontPage/>}/>
      <Route path='/presupuesto' element={<Presupuesto/>}/>
      <Route path='*' element={<div>404</div>}/>
    </Routes>
  </BrowserRouter>
)

export default Router;