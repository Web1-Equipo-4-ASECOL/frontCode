import React from 'react';
import nav_image from '../assets/logo.png';

const TheHeader = () => {
    const btnMenu = () =>{
        let shoppingCart = document.querySelector('.shopping-cart');
        let loginForm = document.querySelector('.login-form');
        let navbar = document.querySelector('.navbar');
        document.querySelector('#menu-btn').onclick = () => {
            navbar.classList.toggle('active');
            shoppingCart.classList.remove('active');
            loginForm.classList.remove('active');
        }
    }
    const btnCart = () =>{
        let shoppingCart = document.querySelector('.shopping-cart');
        let loginForm = document.querySelector('.login-form');
        let navbar = document.querySelector('.navbar');
        document.querySelector('#cart-btn').onclick = () => {
            shoppingCart.classList.toggle('active');
            loginForm.classList.remove('active');
            navbar.classList.remove('active');
        }
    }
    const btnLogin = () =>{
        let shoppingCart = document.querySelector('.shopping-cart');
        let loginForm = document.querySelector('.login-form');
        let navbar = document.querySelector('.navbar');
        document.querySelector('#login-btn').onclick = () => {
            loginForm.classList.toggle('active');
            shoppingCart.classList.remove('active');
            navbar.classList.remove('active');
        }
    }
    return (
    <header className="header">
        <a href="#home">
            <img src={nav_image} alt=""/>
        </a>
        <nav className="navbar">
            <a href="#home">Inicio</a>
            <a href="#services">Servicios</a>
            <a href="#news">Noticias</a>
            <a href="#users">Nosotros</a>
            <a href="#products">Productos</a>
        </nav>
        <div className="icons">
            <div className="bi bi-list" id="menu-btn" onClick={() => btnMenu()}></div>
            <div className="bi bi-cart4" id="cart-btn" onClick={() => btnCart()}></div>
            <div className="bi bi-person-fill" id="login-btn" onClick={() => btnLogin()}></div>
        </div>

        <div className="shopping-cart">
            <div className="box">
                <i className="bi bi-trash-fill"></i>
                <img src="img/recogedor-mano.jpg" alt=""/>
                <div className="content">
                    <h3>Recogedor</h3>
                    <span className="price">$7.000/-</span>
                    <span className="quantity">Cant: 1</span>
                </div>
            </div>

            <div className="box">
                <i className="bi bi-trash-fill"></i>
                <img src="img/escurridor.png" width="90px" alt=""/>
                <div className="content">
                    <h3>Escurridor</h3>
                    <span className="price">$17.000/-</span>
                    <span className="quantity">Cant: 1</span>
                </div>
            </div>

            <div className="box">
                <i className="bi bi-trash-fill"></i>
                <img src="img/trapero.png" alt=""/>
                <div className="content">
                    <h3>Trapero</h3>
                    <span className="price">$10.000</span>
                    <span className="quantity">Cant: 1</span>
                </div>
            </div>

            <div className="total"> Total: 34.000/-</div>
            <a href="#btn" className="btn">Verificar</a>
        </div>

        <form action="" className="login-form">
            <h3>Inicio de Sesión</h3>
            <input type="email" placeholder="Correo Electrónico" className="box"/>
            <input type="password" placeholder="Contraseña" className="box"/>

            <p>Olvidaste tu contraseña <a href="#btn">Haga click aquí</a></p>
            <p>Crear cuenta <a href="login">Crear ahora</a></p>

            <input type="submit" value="Ingresar" className="btn"/>
        </form>

    </header>
  );
}

export default TheHeader;