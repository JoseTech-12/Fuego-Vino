
import{Routes,Route } from "react-router-dom"
import Administrador  from "../Pages/Administrador"
import  Login  from "../Pages/Login"
import  Usuario  from "../Pages/Usuario"
import Menu from "../Pages/Menu"
import Fechas from "../Pages/Fechas"
import Reservas from "../Pages/Reservas"
import RecContra from "../Pages/RecContra"
import CrearCuenta from "../Pages/CrearCuenta"
import Principal from "../Pages/Principal"


 const Router = () => {
  return (
    <Routes>
        <Route path="/" element ={<Principal/>}/>
        <Route path="/Login" element ={<Login/>}/>
        <Route path="/Usuario" element ={<Usuario/>}/>
        <Route path="/Administrador" element ={<Administrador/>}/>
        <Route path="/Menu" element ={<Menu/>}/>
        <Route path="/Fechas" element ={<Fechas/>}/>
        <Route path="/Reservas" element ={<Reservas/>}/>
        <Route path="/RecContra" element ={<RecContra/>}/>
        <Route path="/CrearCuenta" element ={<CrearCuenta/>}/>
        </Routes>
  )
}

export default Router