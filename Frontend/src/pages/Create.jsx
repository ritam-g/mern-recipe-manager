import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipes } from "../context/RecipeProvider";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
function Create() {
 const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { data, setdata } = useContext(recipes);

  const onSubmit = (obj) => {
    obj.id = nanoid();
    setdata([...data, obj]);
    toast.success("New recipe crearted")
    navigate("/recipes")
    reset();
  };
  console.log(data);
  
  const inputStyle =
    "w-full bg-[rgb(var(--input-bg))] border border-[rgb(var(--input-border))] " +
    "rounded-[var(--radius-md)] px-[var(--space-md)] py-[var(--space-sm)] " +
    "text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))] " +
    "focus:border-[rgb(var(--primary))] focus:ring-2 focus:ring-[rgb(var(--primary-soft))] " +
    "outline-none transition-all duration-300";

  const labelStyle =
    "text-[var(--text-sm)] text-[rgb(var(--text-muted))] font-medium";

  const errorText =
    "text-[rgb(var(--error))] text-[var(--text-xs)] mt-1";

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] flex items-center justify-center px-4 py-4 rounded-2xl">
      <div
        className="
        w-full max-w-xl
        bg-[rgb(var(--surface))]
        rounded-[var(--radius-lg)]
        shadow-[var(--shadow-lg)]
        p-[var(--space-xl)]
        border border-[rgb(var(--border-color))]
      "
      >
        <h2
          className="
          text-[var(--text-xl)]
          font-bold
          text-[rgb(var(--text))]
          mb-[var(--space-lg)]
          text-center
        "
        >
          Create New Recipe 🍳
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[var(--space-md)]"
        >

          {/* Image */}
          <div>
            <label className={labelStyle}>Image URL</label>
            <input
              type="text"
              placeholder="Paste image link..."
              {...register("image", { required: "Image URL is required" })}
              className={inputStyle}
            />
            {errors.image && <p className={errorText}>{errors.image.message}</p>}
          </div>

          {/* Title */}
          <div>
            <label className={labelStyle}>Recipe Title</label>
            <input
              type="text"
              placeholder="Enter recipe title"
              {...register("title", { required: "Title is required" })}
              className={inputStyle}
            />
            {errors.title && <p className={errorText}>{errors.title.message}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className={labelStyle}>Ingredients</label>
            <textarea
              rows="3"
              placeholder="Separate ingredients with comma"
              {...register("ingredients", { required: "Ingredients required" })}
              className={`${inputStyle} resize-none`}
            />
            {errors.ingredients && (
              <p className={errorText}>{errors.ingredients.message}</p>
            )}
          </div>

          {/* Instructions */}
          <div>
            <label className={labelStyle}>Instructions</label>
            <textarea
              rows="3"
              placeholder="Separate steps with comma"
              {...register("instructions", { required: "Instructions required" })}
              className={`${inputStyle} resize-none`}
            />
            {errors.instructions && (
              <p className={errorText}>{errors.instructions.message}</p>
            )}
          </div>

          {/* Chef Name */}
          <div>
            <label className={labelStyle}>Chef Name</label>
            <input
              type="text"
              placeholder="Enter chef name"
              {...register("chef", { required: "Chef name required" })}
              className={inputStyle}
            />
            {errors.chef && <p className={errorText}>{errors.chef.message}</p>}
          </div>

          {/* Category */}
          <div>
            <label className={labelStyle}>Category</label>
            <select
              {...register("category", { required: "Category required" })}
              className={`${inputStyle} cursor-pointer`}
            >
              <option value="">Select category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
            {errors.category && (
              <p className={errorText}>{errors.category.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              mt-[var(--space-md)]
              bg-[rgb(var(--primary))]
              hover:bg-[rgb(var(--primary-dark))]
              text-white
              py-[var(--space-sm)]
              rounded-[var(--radius-md)]
              font-semibold
              shadow-[var(--shadow-md)]
              active:scale-95
              transition-all duration-300
            "
          >
            Save Recipe
          </button>

        </form>
      </div>
    </div>
  );
}

export default Create;