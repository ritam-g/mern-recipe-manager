import React from "react";
import { Link } from 'react-router-dom'
function RecipeCard({
    id,
    image,
    title,
    ingredients,
    instructions,
    chef,
    category,
}) {
    return (
        <Link to={`/recipe/details/${id}`}>
            <article
                className="
        group
        bg-[rgb(var(--surface))]
        border border-[rgb(var(--border-color))]
        rounded-[var(--radius-lg)]
        overflow-hidden
        shadow-[var(--shadow-sm)]
        hover:shadow-[var(--shadow-lg)]
        transition-all duration-300
        hover:-translate-y-1
        flex 
      "
            >
                {/* Image Section */}
                <div className="relative h-52 overflow-hidden bg-[rgb(var(--surface-light))]">
                    <img
                        src={image}
                        alt={title}
                        className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
                    />
                </div>

                {/* Content Section */}
                <div className="p-[var(--space-md)] flex flex-col gap-[var(--space-sm)]">

                    {/* Category */}
                    <div className="flex items-center gap-2 text-[var(--text-xs)]">
                        <span className="uppercase tracking-wide text-[rgb(var(--text-muted))]">
                            Type:
                        </span>
                        <span className="text-[rgb(var(--primary))] font-medium">
                            {category}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[var(--text-lg)] font-semibold text-[rgb(var(--text))]">
                        Dish Name: {title}
                    </h3>

                    {/* Chef */}
                    <p className="text-[rgb(var(--text-muted))] text-[var(--text-sm)]">
                        Chef: {chef}
                    </p>

                    {/* Ingredients */}
                    <div className="text-[var(--text-sm)] text-[rgb(var(--text-muted))]">
                        <span className="font-medium text-[rgb(var(--text))]">
                            Ingredients:
                        </span>{" "}
                        {ingredients}
                    </div>

                    {/* Instructions */}
                    <div className="text-[var(--text-sm)] text-[rgb(var(--text-muted))] leading-relaxed">
                        <span className="font-medium text-[rgb(var(--text))]">
                            Instructions:
                        </span>{" "}
                        {instructions?.slice(0, 100)}
                        {instructions?.length > 10 && "..."}
                        {instructions?.length > 10 && (
                            <button
                                className="
                ml-2
                text-[rgb(var(--primary))]
                text-[var(--text-xs)]
                font-medium
                hover:underline
                transition-all duration-200
              "
                            >
                                Read More
                            </button>
                        )}
                    </div>

                </div>
            </article>
        </Link>
    );
}

export default RecipeCard;