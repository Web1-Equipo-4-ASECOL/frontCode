import React from 'react';
import nav_image from '../assets/logo.png';
function TheHeader() {
  return (
    <nav className="header">
        <a className="nav-item" href="#home"><img src={nav_image} alt="logo"/></a>
        <a className="nav-item" href="#home">Home</a> |
        <a className="nav-item" href="#services">Servicios</a>  |
        <a className="nav-item" href="#news">Noticias </a>  |
        <a className="nav-item" href="#users">Nosotros</a>|
        <a className="nav-item" href="#login">Login</a>
       
    </nav>
  );
}

export default TheHeader;