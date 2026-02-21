import React, { useContext } from 'react'
import { recipes } from '../context/RecipeProvider'

function Recipes() {
 const {data}= useContext(recipes)
  return (
    <section>
      {data.map((recipe,idx)=>{
        return <div key={idx}>{recipe.id}</div>
      })}
    </section>
  )
}

export default Recipes
