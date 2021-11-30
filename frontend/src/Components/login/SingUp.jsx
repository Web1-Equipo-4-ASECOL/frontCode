import React from 'react'
import { Link } from 'react-router-dom'
import nav_image from '../../assets/logo.png';

const SingUp = () => {
    return (
        <div className="container">
            <form className="login-form" >
                <img src={nav_image} alt="logo" />
                <h3>Inicio de Sesión</h3>
                <div className="d-flex flex-row mb-4 ">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input
                            type="text"
                            id="form3Example1c"
                            className="form-control box"
                            name="name"
                            autoComplete="off"
                            required
                        />
                        <label className="form-label" htmlFor="form3Example1c">Su nombre</label>
                    </div>
                </div>
                <div className="d-flex flex-row mb-4 ">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input
                            type="text"
                            id="form3Example1c"
                            className="form-control box"
                            name="email"
                            autoComplete="off"
                            required
                        />
                        <label className="form-label" htmlFor="form3Example1c">Su email</label>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input
                            type="password"
                            id="form3Example4c"
                            className="form-control box"
                            name="password"
                            autoComplete="off"
                            required
                        />
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input
                            type="password"
                            id="form3Example4cd"
                            className="form-control box"
                            name="password2"
                            autoComplete="off"
                            required
                        />
                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                </div>
                <Link to="/login">Already have an account? Sing in</Link>
                <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg"
                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                </div>


            </form>
        </div>
    )
}

export default SingUp
