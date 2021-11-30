import React from 'react'
import { Link } from 'react-router-dom'
import nav_image from '../../assets/logo.png';
const login = () => {


    return (
        //     <div className="container">
        <form className="login-form">
            <img src={nav_image} alt="logo" />
            <h3>Inicio de Sesión</h3>
            <input
                type="email"
                className="box"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese su email"
                name="email"
                autoComplete="off"
                required />
            <input 
                type="password"
                placeholder="Contraseña" 
                className="box" />

            <p>Olvidaste tu contraseña <a href="#btn">Haga click aquí</a></p>
            <p>Crear cuenta <Link to="/signup">Crear ahora</Link></p>

            <input type="submit" value="Ingresar" className="btn" />
        </form>
        // </div>
    )
}

export default login
