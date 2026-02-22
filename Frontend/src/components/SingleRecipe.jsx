import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { recipes } from "../context/RecipeProvider";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

function SingleRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipes);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[rgb(var(--bg))]">
        <p className="text-[rgb(var(--text-muted))] text-lg">
          No recipes available.
        </p>
      </div>
    );
  }

  const singleRecipe = data.find(
    (recipe) => String(recipe.id) === String(id)
  );

  if (!singleRecipe) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(var(--bg))] gap-4">
        <h2 className="text-[rgb(var(--error))] text-xl font-semibold">
          Recipe Not Found
        </h2>
        <button
          onClick={() => navigate("/recipes")}
          className="px-6 py-2 rounded-[var(--radius-md)] 
          bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))] 
          transition-all duration-300 text-white shadow-md"
        >
          Back to Recipes
        </button>
      </div>
    );
  }

  const { image, title, ingredients, instructions, chef, category } =
    singleRecipe;

  // ✅ Prefill form
  useEffect(() => {
    reset(singleRecipe);
  }, [singleRecipe, reset]);

  // ✅ Update logic (real update)
  const onSubmit = (updatedData) => {
    const updatedRecipes = data.map(recipe => recipe.id === id ? { ...recipe, ...updatedData } : recipe);

    setdata(updatedRecipes);
    toast.success("Recipe updated successfully 🚀");

  };
  //delte Data
  function deleteHandler() {
    const filteredData = data.filter(
      recipe => recipe.id !== singleRecipe.id
    );

    setdata(filteredData);
    navigate("/recipes");
    toast.success("Recipe deleted successfully 🚀");
  }

  const inputStyle =
    "w-full bg-[rgb(var(--input-bg))] border border-[rgb(var(--input-border))] " +
    "rounded-[var(--radius-md)] px-4 py-2 text-[rgb(var(--text))] " +
    "focus:border-[rgb(var(--primary))] focus:ring-2 focus:ring-[rgb(var(--primary-soft))] " +
    "outline-none transition-all duration-300";

  const labelStyle =
    "text-sm text-[rgb(var(--text-muted))] font-medium";

  const errorText =
    "text-[rgb(var(--error))] text-xs mt-1";

  return (
    <section className="rounded-2xl min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--text))] px-6 py-16 animate-fadeIn">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE - DETAILS */}
        <div className="space-y-8 animate-slideUp">

          <div className="relative group overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]">
            <img
              src={image}
              alt={title}
              className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 px-4 py-1 rounded-full 
              bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))] text-sm backdrop-blur">
              {category}
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2">{title}</h1>
            <p className="text-[rgb(var(--text-muted))]">
              By <span className="text-[rgb(var(--secondary))] font-medium">{chef}</span>
            </p>
          </div>

          <div className="bg-[rgb(var(--surface))] p-6 rounded-[var(--radius-md)] shadow-md">
            <h3 className="text-lg font-semibold text-[rgb(var(--accent))] mb-3">
              Ingredients
            </h3>
            <p className="text-[rgb(var(--text-muted))] leading-relaxed">
              {ingredients}
            </p>
          </div>

          <div className="bg-[rgb(var(--surface))] p-6 rounded-[var(--radius-md)] shadow-md">
            <h3 className="text-lg font-semibold text-[rgb(var(--secondary))] mb-3">
              Instructions
            </h3>
            <p className="text-[rgb(var(--text-muted))] leading-relaxed">
              {instructions}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - UPDATE FORM */}
        <div className="bg-[rgb(var(--surface))] p-8 rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] border border-[rgb(var(--border-color))] animate-slideUp">

          <h2 className="text-xl font-bold mb-6 text-center">
            Update Recipe ✨
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            <div>
              <label className={labelStyle}>Image URL</label>
              <input {...register("image", { required: "Image required" })} className={inputStyle} />
              {errors.image && <p className={errorText}>{errors.image.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Title</label>
              <input {...register("title", { required: "Title required" })} className={inputStyle} />
              {errors.title && <p className={errorText}>{errors.title.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Ingredients</label>
              <textarea rows="3" {...register("ingredients", { required: "Ingredients required" })} className={`${inputStyle} resize-none`} />
              {errors.ingredients && <p className={errorText}>{errors.ingredients.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Instructions</label>
              <textarea rows="3" {...register("instructions", { required: "Instructions required" })} className={`${inputStyle} resize-none`} />
              {errors.instructions && <p className={errorText}>{errors.instructions.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Chef</label>
              <input {...register("chef", { required: "Chef required" })} className={inputStyle} />
              {errors.chef && <p className={errorText}>{errors.chef.message}</p>}
            </div>

            <div>
              <label className={labelStyle}>Category</label>
              <select {...register("category", { required: "Category required" })} className={inputStyle}>
                <option value="">Select</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
              {errors.category && <p className={errorText}>{errors.category.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-dark))]
              py-3 rounded-[var(--radius-md)] font-semibold shadow-md
              transition-all duration-300 active:scale-95"
            >
              Save Changes
            </button>
            <button
              onClick={() => deleteHandler()}
              className="w-full bg-red-400 hover:text-black
              py-3 rounded-[var(--radius-md)] font-semibold shadow-md
              transition-all duration-300 active:scale-95"
            >
              Delete
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default SingleRecipe;