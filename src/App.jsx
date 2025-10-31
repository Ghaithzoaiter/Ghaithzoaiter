// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
// import Navbar from './components/Navbar'
// import About from './routers/About' 
// import Home from './routers/Home'
import Book from './routers/Book'
import Background from './components/Background'
function App() {
  return (
    <>
        <BrowserRouter>
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-gray-50'>
        <Background/>
        {/* <Navbar/> */}
        <Book/>
        {/* <Routes>
          <Router path="/" element={<Home/>}/>
          <Router path="/about" element={<About/>}/>

        </Routes> */}
        </div>      
        </BrowserRouter>
    </>
  )
}

export default App;


