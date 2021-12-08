import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../Components/ui/NavbarAdmin';
import ProductosDT from '../Components/productos/ProductosDT';
import CategoriasDT from '../Components/categorias/CategoriasDT'
import UsuariosDT from '../Components/usuarios/UsuariosDT'
import ComprasDT from '../Components/compras/ComprasDT';

 
const DashboardRouterAdmin = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <Routes>
                    <Route path="producto" element={<ProductosDT/>} />
                    <Route path="categoria" element={<CategoriasDT/>} />
                    <Route path="usuario" element={<UsuariosDT/>} />
                    <Route path="compra" element={<ComprasDT/>} />
                </Routes>
            </div>
        </>
    )
     
    
    
}

export default DashboardRouterAdmin
