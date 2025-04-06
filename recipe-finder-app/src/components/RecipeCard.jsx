import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RecipeCard = () => {


   const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



     useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to fetch meals");
            }
            return res.json();
          })
          .then((data) => {
            setMeals(data.meals || []);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []);
  return (
    <div>
       
      <h1 className="text-2xl text-center font-bold justify-content-center">Meals</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

  {meals.map((meal) => (
    <Link
      to={`/meal/${meal.idMeal}`}
      key={meal.idMeal}
      className="block border p-4 rounded hover:bg-gray-100 transition"
    >
       <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-[500px] h-[300px] object-cover mt-2 rounded"
      />
      <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
      <p className="text-sm text-gray-500">Category: {meal.strCategory}</p>
     
    </Link>
  ))}
</div>

      )}
    
    </div>
  )
}

export default RecipeCard
