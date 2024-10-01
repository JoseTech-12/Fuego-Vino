import { useState } from "react"
import NavbarMenu from "../Componentes/Menu"
import "../Css/Principal.css"
import carruselUno from "../assets/carrusel1.jpg"
import carruselDos from "../assets/carrusel2.jpg"
import carruselTres from "../assets/carrusel3.jpg"
import TartaDeSalmon from "../assets/TartadeSalmon.jpg"
import foisPlancha from "../assets/foisPlancha.jpg"
import champiñones from "../assets/champiñones.jpg"
import filete from "../assets/filete.jpg"
import lubia from "../assets/lubia.jpeg"
import trufas from "../assets/trufas.jpg"
import persona from "../assets/persona1.jpg"
import califacion from "../assets/calificacion.png"
import persona1 from "../assets/persona2.jpg"
import persona2 from "../assets/persona3.jpg"


const Principal = () => {



    /*
        const reseña = [
            {
                foto: persona,
                nombre: 'Isaac Gomez',
                comentario: 'delicioso',
                calificacion: 1
            },
            {
                foto: persona,
                nombre: 'Isaac Gomez',
                comentario: 'delicioso',
                calificacion: 1
            },
            {
                foto: persona,
                nombre: 'Isaac Gomez',
                comentario: 'delicioso',
                calificacion: 1
            },
        ]
    */

    const [verMas, setVerMas] = useState(false)

    const HandleVerMasClick = () => {
        setVerMas(!verMas);
    };
    return (
        <div>
            <NavbarMenu></NavbarMenu>
            <div id="carouselExampleIndicators" className="carrusel carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carruselUno} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carruselDos} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={carruselTres} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className="acerca-de" id="acerca-de">
                <div className="contenido-acerca-de">
                    <h2>Acerca de</h2>
                    <p className="texto-de-acerca-de">¡Bienvenidos a Fuego & Vino! En nuestro restaurante, la pasión por la cocina y el amor por el buen vino se fusionan para ofrecerte una experiencia gastronómica inolvidable.

                        En Fuego & Vino, nos especializamos en la cocina a la parrilla, con cortes de carne seleccionados y mariscos frescos que se cocinan a la perfección, resaltando los sabores auténticos de cada ingrediente. Puedes disfrutar de nuestras jugosas costillas a la barbacoa, el clásico ojo de bife, o una deliciosa langosta a la plancha. Además, ofrecemos una variedad de guarniciones artesanales, como nuestro puré de papas trufado y verduras asadas al fuego. Para acompañar tu comida, nuestra carta de vinos ha sido cuidadosamente seleccionada para complementar cada plato, con opciones que van desde los mejores caldos locales hasta reconocidas marcas internacionales.

                        Te invitamos a visitar nuestra página web, donde podrás explorar nuestro menú completo y hacer tu reserva de manera rápida y sencilla. ¡No dejes pasar la oportunidad de disfrutar de una velada única en Fuego & Vino! ¡Te estamos esperando!</p>
                </div>
            </section>
            <hr />
            <section className="menus" id="menu">
                <h2 className="titulo-seccion">Nuestro Menú</h2>
                <div>
                    <div className="menuR">
                        <h3>Entradas</h3>
                        <div className="contenidoInicial">

                            <div className="menu1">
                                <h5>Tarta de salmon</h5>
                                <img className="imagenesMenu" src={TartaDeSalmon} alt="" />
                                <p>Salmón fresco picado, aguacate, mango y aderezo de sésamo, servido con chips de loto.</p>
                            </div>
                            <div className="menu1">
                                <h5>Foie gras a la plancha</h5>
                                <img className="imagenesMenu" src={foisPlancha} alt="" />
                                <p>Rodajas de foie gras a la plancha, compota de higos y pan brioche tostado.</p>
                            </div>
                            <div className="menu1">
                                <h5>Crema de champiñones</h5>
                                <img className="imagenesMenu" src={champiñones} alt="" />
                                <p>Crema suave de champiñones silvestres, trocitos de avellana y crema fresca.</p>
                            </div>
                        </div>


                        <div className={`collapse ${verMas ? 'show' : ''}`} id="contenidoAdicional">
                            <div>
                                <h3>Platos Principales</h3>
                                <div className="contenidoInicial">

                                    <div className="menu1">
                                        <h5>Filete de res Rossini</h5>
                                        <img className="imagenesMenu" src={filete} alt="" />
                                        <p>Filete de res acompañado de salsa de oporto, trufas negras y puré de patatas con aceite de oliva.</p>
                                    </div>
                                    <div className="menu1">
                                        <h5>Lubina al horno</h5>
                                        <img className="imagenesMenu" src={lubia} alt="" />
                                        <p>Lubina al horno, emulsión de lima y verduras de temporada asadas.</p>
                                    </div>
                                    <div className="menu1">
                                        <h5>Risotto de trufas</h5>
                                        <img className="imagenesMenu" src={trufas} alt="" />
                                        <p>Risotto cremoso con parmesano, aromatizado con trufa negra y servido con lascas de parmesano.</p>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
                <div className="mt-auto verMas">
                    <button className="btn btn-primary botonVermas" onClick={HandleVerMasClick}>
                        {verMas ? 'Ver menos' : 'Ver más'}
                    </button>
                </div>
            </section>
            <hr />

            <section id="reseña">
                <div>
                    <h2 className="titulo-seccion" >Reseñas</h2>
                    <div className="contenedor-reseña">
                        <div className="reseña1">
                            <div className="foto-perfil"><img src={persona} alt="" /></div>

                            <div className="conten-datos">
                                <div>
                                    <p>Isaac Gomez</p>
                                    <p>¡Una experiencia inolvidable! La comida estuvo espectacular, llena de sabores auténticos y bien presentados. El ambiente es acogedor y el servicio de primera, siempre atentos a cada detalle. Definitivamente, uno de los mejores restaurantes que he visitado. ¡Recomendado al 100%!</p>
                                </div>
                                <div><img src={califacion} alt="" /></div>
                            </div>
                        </div>
                        <div className="reseña1">
                            <div className="foto-perfil"><img src={persona2} alt="" /></div>

                            <div className="conten-datos">
                                <div>
                                    <p>Cristian Alvarez</p>
                                    <p>Ambiente acogedor, comida increíble y un servicio impecable. ¡Totalmente recomendable!</p>
                                </div>
                                <div><img src={califacion} alt="" /></div>
                            </div>
                        </div>
                        <div className="reseña1">
                            <div className="foto-perfil"><img src={persona1} alt="" /></div>

                            <div className="conten-datos">
                                <div>
                                    <p>Jose Parra</p>
                                    <p>Excelente atención y comida deliciosa. Cada plato fue una sorpresa de sabor. ¡Volveré pronto!</p>
                                </div>
                                <div><img src={califacion} alt="" /></div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>


    )

}

export default Principal