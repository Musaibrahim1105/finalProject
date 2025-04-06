import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/meal/:id" element={<RecipeDetails />} />
        
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
