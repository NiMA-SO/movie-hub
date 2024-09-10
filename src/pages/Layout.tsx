import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import './index.css'
import GenreProvider from "../components/GenreProvider"


const Layout = () => {
  return (
    <>
      <GenreProvider>
        <NavBar/>
        <Outlet/>
      </GenreProvider>
    </>
  )
}

export default Layout