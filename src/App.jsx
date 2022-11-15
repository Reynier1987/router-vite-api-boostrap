import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { NavBar } from './components/NavBar'
import { Layout } from './components/Layout'
import { Search } from './pages/search'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Products/>} />
          <Route path='/search/' element={<Search/>}/>
         </Route>
        
      </Routes>
      
    </>
  )
}
// el * de products para que pueda tener sub enlaces
// y en elementse le pueden pasar prop
export default App
