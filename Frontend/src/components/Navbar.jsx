import React from "react"
import { NavLink } from "react-router-dom"

function Navbar() {

    const navStyle = ({ isActive }) =>
        `px-[var(--space-md)] py-[var(--space-sm)]
     rounded-[var(--radius-md)]
     font-medium
     transition-[var(--transition-normal)]
     shadow-[var(--shadow-sm)]
     ${isActive
            ? "bg-[rgb(var(--primary))] text-[rgb(var(--text))] shadow-[var(--shadow-md)] scale-105"
            : "bg-[rgba(var(--primary),0.15)] text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))] hover:text-[rgb(var(--text))] hover:scale-105"
        }`

    return (
        <nav className="flex justify-around items-center bg-[rgb(var(--surface))] p-[var(--space-md)]">

            <NavLink to="/" className={navStyle}>
                Home
            </NavLink>

            <NavLink to="/about" className={navStyle}>
                About
            </NavLink>

            <NavLink to="/recipes" className={navStyle}>
                Recipes
            </NavLink>

            <NavLink to="/create" className={navStyle}>
                Create Recipe
            </NavLink>

        </nav>
    )
}

export default Navbar