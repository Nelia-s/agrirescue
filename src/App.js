// src/App.jsx
import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart"; // Importer CartProvider
import Home from "./Frontend/Composants/Home.jsx";
import Login from "./Frontend/Composants/Login.jsx";
import Register from "./Frontend/Composants/Register.jsx";
import Products from "./Frontend/Composants/ProductsListing.jsx";
import Cart from "./Frontend/Composants/Cart.jsx";

function App() {
  return (
    <div className="App">
      <CartProvider> {/* Envelopper l'ensemble de l'application avec CartProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
