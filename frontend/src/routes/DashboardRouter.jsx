import React from 'react'
import { Routes, Route } from "react-router-dom";
// import ProductoCard from '../Components/productos/ProductoCard';
import Navbar from '../Components/ui/Navbar';
import Productos from '../Components/productos/Productos';
import Categorias from '../Components/categorias/Categorias';
import SearchScreen from '../Components/search/SearchScreen';

const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <Routes>
                    <Route path="producto" element={<Productos/>}/>
                    <Route path="categoria" element={<Categorias/>} />
                    <Route path="search" element={<SearchScreen/>} />
                </Routes>
            </div>
        </>
    )
     
    
    
}

export default DashboardRouter
