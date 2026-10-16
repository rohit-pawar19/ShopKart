import { Route, Routes } from "react-router-dom";
import "./index.css"
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import Payment from "./Pages/Payment";
import Success from "./Pages/Success";

function App(){
  const {state}=useContext(ThemeContext)

  return(
    <>

     <div className="app-shell" data-theme={state.theme}>


        <Navbar/>
  

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" Component={Product}/>
          <Route path="/cart" Component={Cart}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/payment" element={<Payment/>}   />
          <Route path="/success" element={<Success/>}/>
          
          
        </Routes>    
     </div>


    </>
  )
}

export default App;
