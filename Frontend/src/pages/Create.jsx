import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipes } from "../context/RecipeProvider";

function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const {data,setdata} = useContext(recipes);
  const onSubmit = async (obj) => {
    obj.id=nanoid()
    await setdata([...data,obj])
    console.log(data);
    reset()
  };

  const fieldWrapper = "relative flex flex-col gap-1";

  const inputBase =
    "w-full bg-transparent outline-none py-[var(--space-sm)] " +
    "text-[rgb(var(--text))] placeholder:text-[rgb(var(--text-muted))]";

  const underline =
    "border-b border-[rgb(var(--border-color))] " +
    "focus:border-[rgb(var(--primary))] transition-all duration-300";

  const errorText =
    "text-[rgb(var(--error))] text-[var(--text-xs)]";

  return (
    <div className="flex justify-center mt-[var(--space-xl)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[420px] flex flex-col gap-[var(--space-md)]"
      >

        {/* Image URL */}
        <div className={fieldWrapper}>
          <input
            type="text"
            placeholder="Enter Image URL"
            {...register("image", { required: "Image URL is required" })}
            className={`${inputBase} ${underline}`}
          />
          {errors.image && (
            <p className={errorText}>{errors.image.message}</p>
          )}
        </div>

        {/* Title */}
        <div className={fieldWrapper}>
          <input
            type="text"
            placeholder="Recipe Title"
            {...register("title", { required: "Title is required" })}
            className={`${inputBase} ${underline}`}
          />
          {errors.title && (
            <p className={errorText}>{errors.title.message}</p>
          )}
        </div>

        {/* Ingredients */}
        <div className={fieldWrapper}>
          <textarea
            rows="2"
            placeholder="// write ingredients separated by comma"
            {...register("ingredients", { required: "Ingredients required" })}
            className={`${inputBase} ${underline} resize-none`}
          />
          {errors.ingredients && (
            <p className={errorText}>{errors.ingredients.message}</p>
          )}
        </div>

        {/* Instructions */}
        <div className={fieldWrapper}>
          <textarea
            rows="2"
            placeholder="// write instructions separated by comma"
            {...register("instructions", { required: "Instructions required" })}
            className={`${inputBase} ${underline} resize-none`}
          />
          {errors.instructions && (
            <p className={errorText}>{errors.instructions.message}</p>
          )}
        </div>
        {/* Chief NAmw */}
        <div className={fieldWrapper}>
          <textarea
            rows="2"
            placeholder="// write chief Name separated by comma"
            {...register("Chief", { required: "Chief required" })}
            className={`${inputBase} ${underline} resize-none`}
          />
          {errors.instructions && (
            <p className={errorText}>{errors.instructions.message}</p>
          )}
        </div>

        {/* Category */}
        <div className={fieldWrapper}>
          <select
            {...register("category", { required: true })}
            className={`${inputBase} ${underline} cursor-pointer`}
          >
            <option value="">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            mt-[var(--space-md)]
            bg-[rgb(var(--surface-light))]
            hover:bg-[rgb(var(--primary))]
            active:scale-95
            transition-all duration-300
            py-[10px]
            rounded-[var(--radius-md)]
            text-[rgb(var(--text))]
            font-medium
            shadow-[var(--shadow-sm)]
            hover:shadow-[var(--shadow-md)]
          "
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
}

export default Create;