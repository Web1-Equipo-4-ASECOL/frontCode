import React from 'react'
import { useLocation,Navigate } from 'react-router'

const PrivateRouterAdmin = ({children,isLogged}) => {

    const { pathname,search } = useLocation();
    // if(localStorage.getItem('rol') === 'admin'){
    //     const split = pathname.split('/')
    //     const path = "/admin/"+split[2]
    //     localStorage.setItem('lastPath', path + search);
    // }else{
        localStorage.setItem('lastPath', pathname + search);
    // }
    return isLogged
    ? children
    : <Navigate to='/'/>
}

export default PrivateRouterAdmin
