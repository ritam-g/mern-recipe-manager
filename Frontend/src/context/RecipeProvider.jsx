import React, { createContext, useState } from 'react'
export const recipes=createContext()
function RecipeProvider({children}) {
  const [data, setdata] = useState([]);
  return (
    <recipes.Provider value={{data,setdata}}>
      {children}
    </recipes.Provider>
  )
}

export default RecipeProvider
