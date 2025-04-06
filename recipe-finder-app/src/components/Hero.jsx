import React from 'react'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
   <div className='bg-cover h-screen w-full pt-20 text-white bg-center bg-no-repeat' style={{backgroundImage: "url('src/images/pizza.jpg')"}}>

<h1 className='pt-20 font-mono bold text-8xl p-4 m-4 '>Find Your Next <br /> Favorite Recipe</h1>
<h3 className='font-serif text-lg font-bold p-4 m-4 '>Descover delicious meal tailored to <br /> your taste. Search by ingredient, <br /> category or cuisines</h3>

<SearchBar/>
   </div>
  )
}
