import React from 'react';
import home_image from '../assets/img/img_grande.jpg';
const TheHome = () => {
    return ( 
        <section className="home" id="home">
            <div className="image">
                <img src={home_image} alt="homeImage" />
            </div>
            <div className="content">
                <h3>Más que productos de aseo,</h3>
                <h2>somos tu mejor aliado</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                <a href="#productos" className="btn">Ver Productos</a>
            </div>
        </section>
    );
}

export default TheHome;