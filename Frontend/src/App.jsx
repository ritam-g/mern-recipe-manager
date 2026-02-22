import React from 'react'
import { ToastContainer } from "react-toastify"
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'

function App() {
  return (
    <main
      className='h-screen w-screen px-[calc(var(--space-md)*6)] py-[calc(var(--space-md)*2)] bg-[rgb(var(--surface))] text-[rgb(var(--text))] *:
      overflow-y-scroll overflow-x-hidden
    '>
      <Navbar />
      <Mainroutes />
    </main>
  )
}

export default App
