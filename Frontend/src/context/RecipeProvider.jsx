import React, { createContext, useState } from 'react'
export const recipes = createContext()
function RecipeProvider({ children }) {
  const [data, setdata] = useState([
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      title: "Creamy Garlic Pasta",
      ingredients: "Pasta, Garlic, Cream, Butter, Salt, Pepper, Parmesan",
      instructions:
        "Boil pasta, Saute garlic in butter, Add cream, Mix pasta, Add parmesan, Serve hot",
      chef: "Chef Ritam",
      category: "dinner"
    },
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      title: "Creamy Garlic Pasta",
      ingredients: "Pasta, Garlic, Cream, Butter, Salt, Pepper, Parmesan",
      instructions:
        "Boil pasta, Saute garlic in butter, Add cream, Mix pasta, Add parmesan, Serve hot",
      chef: "Chef Ritam",
      category: "dinner"
    },
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      title: "Creamy Garlic Pasta",
      ingredients: "Pasta, Garlic, Cream, Butter, Salt, Pepper, Parmesan",
      instructions:
        "Boil pasta, Saute garlic in butter, Add cream, Mix pasta, Add parmesan, Serve hot",
      chef: "Chef Ritam",
      category: "dinner"
    },
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      title: "Creamy Garlic Pasta",
      ingredients: "Pasta, Garlic, Cream, Butter, Salt, Pepper, Parmesan",
      instructions:
        "Boil pasta, Saute garlic in butter, Add cream, Mix pasta, Add parmesan, Serve hot",
      chef: "Chef Ritam",
      category: "dinner"
    },
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      title: "Creamy Garlic Pasta",
      ingredients: "Pasta, Garlic, Cream, Butter, Salt, Pepper, Parmesan",
      instructions:
        "Boil pasta, Saute garlic in butter, Add cream, Mix pasta, Add parmesan, Serve hot",
      chef: "Chef Ritam",
      category: "dinner"
    },
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      title: "Creamy Garlic Pasta",
      ingredients: "Pasta, Garlic, Cream, Butter, Salt, Pepper, Parmesan",
      instructions:
        "Boil pasta, Saute garlic in butter, Add cream, Mix pasta, Add parmesan, Serve hot",
      chef: "Chef Ritam",
      category: "dinner"
    },
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
      title: "Creamy Garlic Pasta",
      ingredients: "Pasta, Garlic, Cream, Butter, Salt, Pepper, Parmesan",
      instructions:
        "Boil pasta, Saute garlic in butter, Add cream, Mix pasta, Add parmesan, Serve hot",
      chef: "Chef Ritam",
      category: "dinner"
    },
  ]);
  return (
    <recipes.Provider value={{ data, setdata }}>
      {children}
    </recipes.Provider>
  )
}

export default RecipeProvider
