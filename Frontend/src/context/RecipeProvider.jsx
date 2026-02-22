import React, { createContext, useState } from 'react'
export const recipes = createContext()
function RecipeProvider({ children }) {
  const [data, setdata] = useState([
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    title: "Creamy Garlic Pasta",
    ingredients:
      "Pasta, Fresh garlic, Heavy cream, Unsalted butter, Olive oil, Salt, Black pepper, Parmesan cheese, Parsley",
    instructions:
      "Boil pasta in salted water until al dente. In a pan, sauté minced garlic in butter and olive oil. Add heavy cream and simmer until slightly thickened. Toss in cooked pasta, add grated parmesan, season with salt and pepper. Garnish with fresh parsley and serve hot.",
    chef: "Chef Ritam",
    category: "dinner",
  },

  {
    id: "2",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    title: "Classic Pancakes",
    ingredients:
      "All-purpose flour, Milk, Eggs, Sugar, Baking powder, Butter, Vanilla extract, Salt",
    instructions:
      "In a bowl mix flour, sugar, baking powder and salt. Whisk milk, eggs and vanilla separately. Combine wet and dry ingredients. Heat butter on a pan and pour batter. Cook until bubbles form, flip and cook the other side. Serve with maple syrup and fruits.",
    chef: "Chef Ananya",
    category: "breakfast",
  },

  {
    id: "3",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    title: "Margherita Pizza",
    ingredients:
      "Pizza dough, Tomato sauce, Fresh mozzarella, Basil leaves, Olive oil, Salt",
    instructions:
      "Preheat oven to 220°C. Roll out pizza dough and spread tomato sauce evenly. Add sliced mozzarella and drizzle olive oil. Bake for 12-15 minutes until crust is golden. Garnish with fresh basil leaves before serving.",
    chef: "Chef Arjun",
    category: "lunch",
  },

  {
    id: "4",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    title: "Grilled Chicken Salad",
    ingredients:
      "Chicken breast, Lettuce, Cherry tomatoes, Cucumber, Olive oil, Lemon juice, Salt, Pepper",
    instructions:
      "Season chicken with salt and pepper and grill until fully cooked. Slice into strips. Toss lettuce, tomatoes, and cucumber in a bowl. Add grilled chicken on top. Drizzle olive oil and lemon juice. Serve fresh.",
    chef: "Chef Meera",
    category: "lunch",
  },

  {
    id: "5",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    title: "Spicy Butter Chicken",
    ingredients:
      "Chicken, Yogurt, Ginger-garlic paste, Tomato puree, Butter, Cream, Garam masala, Chili powder, Salt",
    instructions:
      "Marinate chicken with yogurt and spices. Grill or sauté until cooked. In another pan, cook tomato puree with butter and spices. Add cream and simmer. Combine chicken with gravy and cook for 10 minutes. Serve with naan or rice.",
    chef: "Chef Vikram",
    category: "dinner",
  },

  {
    id: "6",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    title: "Avocado Toast Deluxe",
    ingredients:
      "Bread slices, Ripe avocado, Lemon juice, Chili flakes, Salt, Pepper, Olive oil, Poached egg",
    instructions:
      "Toast bread slices until crispy. Mash avocado with lemon juice, salt, and pepper. Spread mixture over toast. Top with poached egg, drizzle olive oil and sprinkle chili flakes. Serve immediately.",
    chef: "Chef Neha",
    category: "breakfast",
  }
]);
  return (
    <recipes.Provider value={{ data, setdata }}>
      {children}
    </recipes.Provider>
  )
}

export default RecipeProvider
