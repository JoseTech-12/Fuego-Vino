import React from 'react'
import logo from "../assets/LogoMejorado.png"
import "../Css/Header.css";


const Header = () => {
  return (
    <div className='header'>
      <a className="enlace-logo" href="/"><img className='logo' src={logo} /></a>
      <h1> Fuego & Vino</h1>
      <div className='contenedorBotones'>
        <a className='btn  btn-lg' href="./Login">Iniciar Sesion</a>
        <a className='btn btn-lg' href="./CrearCuenta">Resgistrarse</a>
      </div>
    </div>

  )
}

export default Header
