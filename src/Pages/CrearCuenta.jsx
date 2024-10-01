import React from 'react'
import "../Css/CrearCuenta.css"
import logo from "../assets/logo.png"
 const CrearCuenta = () => {
  return (
    <div>
        <div className="crear">
    <div className="logocontenedor">
        <img src={logo} alt="Logo del restaurante" className="logo" />
    </div>

    <h2>Crea una Cuenta</h2>

    <h3>¿Aún no tienes una cuenta? </h3>
    <h4>Regístrate para acceder a promociones y reservas exclusivas.</h4>

    <form action="#" method="POST" className="formulario">
        <div className="grupo">
            <label htmlFor="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre completo" required />
        </div>

        <div className="grupo">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" placeholder="Ingresa tu correo electrónico" required />
        </div>

        <div className="grupo">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" placeholder="Crea una contraseña" required />
        </div>

        <div className="grupo">
            <label htmlFor="confirmacion">Confirmar Contraseña:</label>
            <input type="password" id="confirmacion" name="confirmacion" placeholder="Confirma tu contraseña" required />
        </div>

        <button type="submit" className="btncrear">Crear Cuenta</button>
    </form>

    <div class="regreso">
    <a href="index.html" class="btn-regresar">Regresar a la Página Principal</a>
</div>
</div>

    </div>
  )
}

export default CrearCuenta