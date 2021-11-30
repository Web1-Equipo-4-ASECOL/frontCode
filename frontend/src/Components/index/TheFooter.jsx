import React from "react";
import logo from '../../assets/img/LOGO asecol-04.png';
import '../../assets/style.css';
const TheFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h3>Sistema de productos de limpieza</h3>
        <h3>Realizado con Vue 2, Express y Mongo DB</h3>
        <a
          id="github"
          href="https://github.com/Mision-Tic-Grupo4"
          target="_blank"
          rel="noreferrer"
        >
          Github <i className="bi bi-github"></i>
        </a>
        <br/>
      </div>
      <div className="vertical-line"></div>
      <div className="footer-team">
        <div>
          <h2>Jhon</h2>
          <h2>Rol: Desarollo</h2>
        </div>
        <div>
          <h2>Maria </h2>
          <h2>Rol: Desarollo</h2>
        </div>
        <div>
          <h2>Ana</h2>
          <h2>Rol: Desarollo</h2>
        </div>
        <div>
          <h2>Estefania</h2>
          <h2>Rol: Desarollo</h2>
        </div>
        <div>
          <h2>Cristhian</h2>
          <h2>Rol: Desarollo</h2>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>
    </footer>
  );
}

export default TheFooter;
