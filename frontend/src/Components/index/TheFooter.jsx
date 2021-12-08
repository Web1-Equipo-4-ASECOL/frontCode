import React from "react";
import logo from '../../assets/img/LOGO asecol-04.png';
const TheFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h4>Sistema de productos de limpieza</h4>
        <h4>Realizado con React, Express y Mongo DB</h4>
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
        <div >
          <h2>Estefania Urro</h2>
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
