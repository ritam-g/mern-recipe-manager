import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'

function Mainroutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/create' element={<Create />} />
        </Routes>
    )
}

export default Mainroutes
