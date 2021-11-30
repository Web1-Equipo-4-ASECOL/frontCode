import React from 'react';
import { Link } from 'react-router-dom';
import nav_image from '../../assets/logo.png';
// import Login from '../login/login';

const TheHeader = () => {

    // const navigate = useNavigate();
    // const shoppingCart = document.querySelector('.shopping-cart');
    // const loginForm = document.querySelector('.login-form');
    // const navbar = document.querySelector('.navbar');


    // const btnCart = () => {
    //     document.querySelector('#cart-btn').onclick = () => {
    //         shoppingCart.classList.toggle('active');
    //         // navbar.classList.remove('active');
    //     }
    // }

    // const btnLogin = () =>{
    //     // e.preventDefault();
    //     document.querySelector('#login-btn').onclick = () => {
    //         // loginForm.classList.toggle('active');
    //         // shoppingCart.classList.remove('active');
    //         navbar.classList.remove('active');
    //         <Login/>
    //     }
    // }
    // const handleLogout = () =>{
    //     navigate('/login', {
    //         replace:true
    //     });
    // }
    return (
        <>
            <nav className="header">
                <a href="#home">
                    <img src={nav_image} alt="logo" />
                </a>
                <div className="navbar w-100">
                    {/* <div className="navbar-collapse  w-100  d-flex justify-content-start" style={{backgroundColor:"blue"}}> */}
                    <a className="nav-item nav-link" href="#home">Inicio</a>
                    <a className="nav-item nav-link" href="#services">Servicios</a>
                    <a className="nav-item nav-link" href="#news">Noticias</a>
                    <a className="nav-item nav-link" href="#users">Nosotros</a>
                    <div className="icons" >
                        {/* <div className="bi bi-list" id="menu-btn" onClick={() => btnMenu()}></div> */}
                        {/* <div className="bi bi-cart4" id="cart-btn" onClick={() => btnCart()}></div> */}
                        {/* <div className="bi bi-person-fill" id="login-btn" onClick={() => btnLogin()}></div> */}
                        <Link
                            style={{ fontSize: "2rem" }}
                            className="bi bi-person-fill"
                            to="/login">
                        </Link>
                    </div>
                    {/* <span className="navbar-item nav-link text-info">
                            Estefania Urro
                        </span>
                        <button className="nav-item nav-link btn-sm"
                            onClick={handleLogout}>
                            Logout.
                        </button> */}
                    {/* </div>   */}
                </div>
            </nav>


            <div className="shopping-cart">
                <div className="box">
                    <i className="bi bi-trash-fill"></i>
                    <img src="img/recogedor-mano.jpg" alt="" />
                    <div className="content">
                        <h3>Recogedor</h3>
                        <span className="price">$7.000/-</span>
                        <span className="quantity">Cant: 1</span>
                    </div>
                </div>

                <div className="box">
                    <i className="bi bi-trash-fill"></i>
                    <img src="img/escurridor.png" width="90px" alt="" />
                    <div className="content">
                        <h3>Escurridor</h3>
                        <span className="price">$17.000/-</span>
                        <span className="quantity">Cant: 1</span>
                    </div>
                </div>

                <div className="box">
                    <i className="bi bi-trash-fill"></i>
                    <img src="img/trapero.png" alt="" />
                    <div className="content">
                        <h3>Trapero</h3>
                        <span className="price">$10.000</span>
                        <span className="quantity">Cant: 1</span>
                    </div>
                </div>
                <div className="total"> Total: 34.000/-</div>
                <a href="#btn" className="btn">Verificar</a>
            </div>
        </>
    );
}

export default TheHeader;