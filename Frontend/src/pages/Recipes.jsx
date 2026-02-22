import React, { useContext } from 'react'
import { recipes } from '../context/RecipeProvider'
import RecipeCard from '../components/RecipeCard'

function Recipes() {
 const {data}= useContext(recipes)
 
  return (
    <section className='  '>
     {data.length>0? data.map((recipe)=><RecipeCard key={recipe.id} {...recipe} />) : 'no recipes found'}
    </section>
  )
}

export default Recipes
