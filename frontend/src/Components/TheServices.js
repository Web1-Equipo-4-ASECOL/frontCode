import React from 'react';
import ambulancia from '../assets/img/ambulancia.png';
import rectangulo from '../assets/img/Rectangle.svg';
import operador from '../assets/img/operador.png';
import escudo from '../assets/img/escudo.png';
import elemento from '../assets/img/elementos-aseo.png';
import carrito from '../assets/img/carrito-aseo.png';
import capacitacion from '../assets/img/capacitacion-aseo.png';

function TheServices(){
    return(
        <section className="services" id="services">
            <div className="floating-information">
                <div className="floating-container">
                    <div className="icon-text">
                        <img src={ambulancia} alt="ambulancia" width="87" height="45"/>
                        <p>Envíos a Todo el País</p>
                    </div>
                    <div className="icon">
                        <img src={rectangulo} alt=""/>
                    </div>

                    <div className="icon-text">
                        <img src={operador} alt="operador" width="45" height="45"/>
                        <p>Atención 24 Horas </p>
                    </div>
                    <div className="icon">
                        <img src={rectangulo} alt=""/>
                    </div>

                    <div className="icon-text">
                        <img src={escudo} alt="escudo" width="45" height="45"/>
                        <p>Pagos Seguros</p>
                    </div>
                </div>
            </div>

            <h1 className="services-heading">Nuestros Servicios</h1>

            <div className="box-container">
                <div className="box">
                    <img src={elemento} alt=""/>
                    <h3>Proveedor Mayorista y Minorista</h3>
                    <div className="green-border"></div>
                </div>
         
                <div className="box">
                    <img src={carrito} alt=""/>
                    <h3>Accesorios e Insumos para Empresas</h3>
                    <div className="green-border"></div>
                </div>

                <div className="box">
                    <img src={capacitacion} alt=""/>
                    <h3>Capacitaciones y Asesorias</h3>
                    <div className="green-border"></div>
                </div>
            </div>
        </section>
    );
}
export default TheServices;