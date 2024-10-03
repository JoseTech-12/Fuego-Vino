import React from 'react';
import "../Css/Login.css";
import logo from "../assets/logo.png";
import NavbarMenu from "../Componentes/Menu"
const Login = () => {
  return (

    <div>
      <NavbarMenu></NavbarMenu>
      <div className='login'>

        <div class="container">
          <div class="imagen">
            <img src={logo} alt="Logo del restaurante" />
          </div>
          <div class="formulario">
            <input type="text" placeholder="Usuario" />
            <input type="password" placeholder="Contraseña" />
            <a href="./RecContra">¿Has olvidado tu contraseña?</a>
            <a href="./Usuario" class="btn-regresar1">Login</a>
            <div class="crearcuenta">
              ¿No tienes una cuenta? <a href="./CrearCuenta">Crear cuenta</a>
            </div>
           
          </div>
        </div>

      </div>
    </div>
  )

}

export default Login;

