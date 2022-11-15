import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"

export const Layout = () => {
  return (
    <div>
        <h1 className=" text-center">Welcome to React Router Demo</h1>
        <NavBar/>
        <Outlet/>
    </div>
  )
}
