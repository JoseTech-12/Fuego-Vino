import React from 'react';
import "../Css/usuario.css";
import reservas from "../assets/reservas.png";
import menu from "../assets/menu.jpeg";
import fechas_especiales from "../assets/fechas_espaciales.jpg"
import logo from "../assets/logo.png"
const Usuario = () => {
    return (
        <div>
            <h2 class="titulo">Bienvenido Usuario</h2>
            <div>
                <div class="container2">
                    <div class="menu">
                        <div class="menu-item">
                            <img src={reservas} alt="Reservas" />
                            <a href='./Reservas'><p>Reservas</p></a>
                        </div>
                        <div class="menu-item">
                            <img src={menu} alt="Menú" />
                            <a href='./Menu'><p>Menú</p></a>
                        </div>
                        <div class="menu-item">
                            <img src={fechas_especiales} alt="Fechas Especiales" width="50 px" height="30px" />
                            <a href="./Fechas"><p>Fechas especiales</p></a>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default Usuario