import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import '../../assets/style.css';
import nav_image from '../../assets/logo.png';

const Navbar = () => {
    const {name} = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch( startLogout() );
        localStorage.removeItem("token");
        localStorage.removeItem("rol");
        localStorage.removeItem("lastPath");
    }


    return (
        <nav className="navbar navbar-expand-lg">
            <img src={nav_image} alt="logo" />
            <div className="collapse navbar-collapse" id="navbarText">
                <div className="navbar-nav mr-auto">
                    <NavLink
                        className={({isActive}) => 'nav-item nav-link ' + (isActive? 'active' : '')}
                        to="search">
                        Search
                    </NavLink>
                    <NavLink
                        className={({isActive}) => 'nav-item nav-link ' + (isActive? 'active' : '')}
                        to="categoria">
                        Categorias
                    </NavLink>
                    <NavLink
                        className={({isActive}) => 'nav-item nav-link ' + (isActive? 'active' : '')}
                        to="producto">
                        Productos
                    </NavLink>
                    
                    {/* <NavLink
                        className={({isActive}) => 'nav-item nav-link ' + (isActive? 'active' : '')}
                        to="/categoriaDT">
                        CategoriaDT
                    </NavLink>
                   
                    <NavLink
                        className={({isActive}) => 'nav-item nav-link ' + (isActive? 'active' : '')}
                        to="/productoDT">
                        ProductoDT
                    </NavLink> */}
                </div>
                <div className="navbar-collapse collapse w-80 order-3 dual-collapse2 d-flex ">
                    <ul className="navbar-nav ml-auto">
                        <span className="navbar-item nav-link ">
                            {name} 
                        </span>
                        <span className="navbar-item nav-link info-text">|</span>
                        <button className="nav-item nav-link btn-link "
                            onClick={handleLogout}>
                            Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
