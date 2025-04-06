import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-[#e9b08e] text-white fixed top-0 right-0 left-0 z-10 shadow-md p-4">

        <img className="w-[40px]" src="src/images/recipeLogo.jpg" alt="" />
      <nav className="flex justify-center space-x-6 ">
        <Link to="/" className="text-white hover:text-green-500 transition">Home</Link>
        <Link to="/about" className="text-white hover:text-green-500 transition">About</Link>
        <Link to="/contact" className="text-white hover:text-green-500 transition">Contact</Link>
        <Link to="/contact" className="text-white hover:text-green-500 transition">RecipeDetails</Link>
      </nav>
    </header>
  );
};

export default Header;
