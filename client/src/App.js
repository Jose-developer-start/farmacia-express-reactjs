import { Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Client from "./pages/Client";
import Home from "./pages/Home";
import Product from "./pages/Product";
import User from "./pages/User";
import Sale from "./pages/Sale";
import Aside from "./partials/Aside";
import Navbar from "./partials/Navbar";
import DetalleVenta from "./pages/DetalleVenta";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import Logout from "./pages/Logout";
function App() {
  const [checkLogin, setCheckLogin] = useState(false);
  
  useEffect(()=>{
    if(sessionStorage.getItem('Auth') === 'true'){
      setCheckLogin(true)
    }else{
      
      setCheckLogin(false)
    }
  },[checkLogin])
  return (
    <>
      {checkLogin ? (
        <>
          <Navbar />
          <Aside />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/usuarios" element={<User />} />
            <Route path="/clientes" element={<Client />} />
            <Route path="/categorias" element={<Category />} />
            <Route path="/productos" element={<Product />} />
            <Route path="/ventas" element={<Sale />} />
            <Route path="/detalle-venta/:id" element={<DetalleVenta />} />
            <Route path="/logout" element={<Logout setCheckLogin={setCheckLogin} />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setCheckLogin={setCheckLogin} />} />
        </Routes>
      )}
    </>
  );
}

export default App;
