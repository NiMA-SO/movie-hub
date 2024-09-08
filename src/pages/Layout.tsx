import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import './index.css'


const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}

export default Layout