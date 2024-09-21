import { Outlet } from "react-router-dom"
import NavBar from "../components/header/NavBar"
import './index.css'
import GenreProvider from "../components/header/GenreProvider"


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