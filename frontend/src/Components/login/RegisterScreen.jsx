import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';
import nav_image from '../../assets/logo.png';
import axios from 'axios';


const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
        rol: 'Cliente',
        terms: false
    });
    const { name, email, password, password2, rol, terms } = formValues;

    const isFormValid = () => {
        if (name.trim().length < 2) {
            // console.log('El nombre debe tener mas de dos caracteres')
            dispatch(setError('El nombre debe tener mas de dos caracteres'))
            return
        }
        if (password.length < 6 || password !== password2) {
            // console.log('La contraseñas deben coincidir y tener al menos 6 caracteres')
            dispatch(setError('La contraseñas deben coincidir y tener al menos 6 caracteres'))
            return
        }
        if (!validator.isEmail(email)) {
            // console.log('El email no es válido')
            dispatch(setError('El email no es válido'))
            return
        }
        if (!terms) {
            // console.log('Debe aceptar los terminos para continuar')
            dispatch(setError('Debe aceptar los terminos para continuar'))
            return
        }
        dispatch(removeError())
        return true
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            axios.post('https://app-asecol.herokuapp.com/api/usuario/add', {
                nombre: name,
                correo: email,
                password: password,
                rol: 'Cliente'
            })
                .then(response => {
                    dispatch(startRegisterWithEmailPassword(email, password, name, rol));
                    <Navigate to='/login' />
                    console.log(response);

                })

            // dispatch( crearUsuario() )
        }
    }
    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <form className="login-form mx-1 mx-md-4" onSubmit={handleRegister}>
                    <img src={nav_image} alt="logo" />
                    <h3>Inicio de Sesión</h3>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input
                                type="text"
                                id="form3Example1c"
                                className="box form-control"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                autoComplete="off"
                                placeholder="Ingrese su nombre"
                                required
                            />
                            <label className="form-label" htmlFor="form3Example1c">Su nombre</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input
                                type="email"
                                id="form3Example3c"
                                className="box form-control"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                autoComplete="off"
                                placeholder="Ingrese su email"
                                required
                            />
                            <label className="form-label" htmlFor="form3Example3c">Su email</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input
                                type="password"
                                id="form3Example4c"
                                className="box form-control"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                autoComplete="off"
                                placeholder="Ingrese su contraseña"
                                required
                            />
                            <label className="form-label" htmlFor="form3Example4c">Su contraseña</label>
                        </div>
                    </div>

                    <div className="d-flex flex-row mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                            <input
                                type="password"
                                id="form3Example4cd"
                                className="box form-control"
                                name="password2"
                                value={password2}
                                onChange={handleInputChange}
                                autoComplete="off"
                                placeholder="Repita su contraseña"
                                required
                            />
                            <label className="form-label" htmlFor="form3Example4cd">Repetir la contraseña</label>
                        </div>
                    </div>
                    <input
                        type="hidden"
                        id="form3Example4cd"
                        name="rol"
                        defaultValue={rol}
                    />
                    <div className="form-check d-flex mb-3">
                        <input
                            className="form-check-input "
                            type="checkbox"
                            id="form2Example3c"
                            name="terms"
                            checked={terms}
                            onChange={handleInputChange}
                        // required
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                            Acepta estar de acuerdo con los terminos y condiciones
                        </label>
                    </div>
                    {
                        msgError && (
                            <div className="alert alert-danger" role="alert">
                                {msgError}
                            </div>
                        )
                    }
                    <div className="text-center text-lg-start mt-2 pt-2">
                        <button type="submit" className="btn w-100">Crear cuenta</button>
                    </div>
                    <Link to="/login">Ya tiene cuenta? Iniciar sesión</Link>
                </form>
            </div>
        </section>
    )
}

export default RegisterScreen
