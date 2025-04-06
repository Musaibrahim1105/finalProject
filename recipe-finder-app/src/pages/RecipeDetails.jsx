import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SearchBar from './../components/SearchBar';


const RecipeDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch meal");
          return res.json();
        })
        .then((data) => {
          setMeal(data.meals[0]); 
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, [id]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!meal) return <p>No meal found</p>;
  



  return (
    
   <>
   <div className='bg-[#e9b08e] p-4 mt-12'><SearchBar /></div>
   <div className="flex flex-col lg:flex-row gap-6">

   <div className="w-full lg:w-1/2">
        
        <img className="w-[500px] h-[300px] max-w-md h-auto rounded mx-auto lg:mx-4 mt-6 ml-6" src={meal.strMealThumb} alt={meal.strMeal}  />
      </div>
      <div>
        <h1 className='font-bold ml-6 mt-4'>{meal.strMeal}</h1>
        <div className=''>
          <div className='flex flex-row p-4 ml-2'>
     
            <div>
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
            </div> </div>
            <div className='m-4 p-4'>
              <h2 className='font-bold' >Instructions</h2>
              <p className='w-[600px]'>{meal.strInstructions}</p>
              
             
              
              
            
            </div>
        </div>
        
      </div>
    </div>
   </>
  )
}

export default RecipeDetails
