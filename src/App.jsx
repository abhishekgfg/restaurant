import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import MenuPage from "./Pages/MenuPage";
import CartPage from "./Pages/CartPage";
import AccountPage from "./Pages/AccountPage"; // import at top
import HelpSupportPage from './Pages/HelpSupportPage';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
  <Route path="/account" element={<AccountPage />} /> 
  <Route path="/help" element={<HelpSupportPage />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
