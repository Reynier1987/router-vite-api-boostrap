import { Link} from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import { Navigate } from "react-router-dom"
import { useState } from "react"


export const NavBar = () => {
  const [keyword, setkeyword] = useState("")

  const Navigate = useNavigate()
  

  const HandleSubmit = (e) => {
    e.preventDefault()
    Navigate('/search?keyword=' + keyword)
    setkeyword("")
    e.target.reset();
    
   
  
  }
  return (
    <>
    
    <nav className=" navbar navbar-text bg-danger">
    
    
        <Link className=" text-black" to="/">Home</Link>
        <Link className=" text-black" to="/about">About</Link>
        <Link className=" text-black" to="/products">Products</Link>
        
        <form onSubmit={HandleSubmit}>
          <input
               placeholder="Search" 
               defaultValue={keyword}
               onChange={(e) => setkeyword(e.target.value)}
               />
           <button> Search</button>
        </form>
        
      
    </nav>
    </>
    
  )
}
