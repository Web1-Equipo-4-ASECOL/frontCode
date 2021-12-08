import React from 'react'
import { Navigate } from 'react-router'

const PublicRouter = ({children,isLogged}) => {
    const rol =localStorage.getItem('rol')
    let ruta = ''
    if (rol==="Cliente"){
        ruta = "/cliente/producto"
    }
    else if (rol==="Administrador"){
        ruta = "/admin/producto"
    }
    return isLogged
    ? <Navigate to={ruta}/>
    : children
}

export default PublicRouter
