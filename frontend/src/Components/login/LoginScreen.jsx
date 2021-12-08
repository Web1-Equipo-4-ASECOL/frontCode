import React from 'react'
import { Link } from "react-router-dom";
import GoogleButton from 'react-google-button';
import {useForm} from '../../hooks/useForm'
import {useDispatch} from 'react-redux'
import {startGoogleLogin,startLoginWithEmailPassword} from '../../actions/auth'
import { useSelector } from 'react-redux';
import nav_image from '../../assets/logo.png';
import axios from 'axios';

const LoginScreen = (props) => {
    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui)
    const [formValues, handleInputChange] = useForm({
        email : '',
        password:''
    });
    const { email,password } = formValues;
    
    const handleLogin = (e) =>{
        e.preventDefault();
        axios.post("https://app-asecol.herokuapp.com/api/usuario/login", {
          correo: email,
          password: password
          
        })
        .then((res) => {
            console.log("registrado", res.data.checkUser)
            localStorage.setItem("rol", res.data.checkUser.rol)
            dispatch(startLoginWithEmailPassword(email,password));
          return res.data;
        })
        .then((data) => {
            localStorage.setItem("token", data.tokenReturn);
        })
        .catch((error) => {
              "Ocurrió un error interno, intente de nuevo en unos minutos";
         }
        )
    }
   
    
    const handleGoogleLogin= ()=>{
       dispatch( startGoogleLogin() );
       
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleLogin} className="login-form">
            <img src={nav_image} alt="logo" />
            <h3>Inicio de Sesión</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="box form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Ingrese su email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        className="box form-control"
                        id="exampleInputPassword1" 
                        placeholder="Ingrese su contraseña"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        autoComplete="off"
                        required
                    />
                    
                </div>
                <button 
                    type="submit" 
                    className="btn w-100"
                    disabled= {loading}
                >
                    Iniciar sesión
                </button>
                    <p> <Link to="/register">Crear cuenta</Link></p>
                <div className="mt-3">
                <GoogleButton 
                    className="w-100"
                    onClick={ handleGoogleLogin }/>
                    </div>
            </form>
            <hr/>
                
               
               
        </div>
    )
}

export default LoginScreen
