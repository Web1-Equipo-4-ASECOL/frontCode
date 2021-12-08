import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { login } from '../actions/auth';

import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import { firebase } from '../firebase/firebase-config'
import PublicRouter from './PublicRouter';
import LoginScreen from '../Components/login/LoginScreen';
import RegisterScreen from '../Components/login/RegisterScreen';
import DashboardHome from '../Components/DashboardHome';
import PrivateRouterAdmin from './PrivateRouterAdmin';
import DashboardRouterAdmin from './DashboardRouterAdmin';

const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLogged, setIsLogged] = useState(false)
    const [isNotReady, setIsNotReady] = useState(true)
    
    const [rol,setRol] = useState(localStorage.getItem('rol'))
    if(rol ==='Aministrador'){setRol("admin")} 
    // const lastPath = localStorage.getItem('lastPath') || `/${rol}/producto`
 
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                setIsLogged(true);
                dispatch(login(user.uid, user.displayName))
            }
            else {
                setIsLogged(false);
            }
            setIsNotReady(false);
        })
    }, [dispatch])
    if (isNotReady) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-grow text-primary" style={{ width: '5rem', height: '5rem' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/login" element={
                    <PublicRouter isLogged={isLogged} lastPath={rol}>
                        <LoginScreen />
                    </PublicRouter>
                } />
                <Route path="/register" element={
                    <RegisterScreen />
                } />
                
                {rol === 'Administrador' ?
                // console.log("El administrador")
                     <Route path="admin/*" element={
                        <PrivateRouterAdmin isLogged={isLogged} >
                            <DashboardRouterAdmin />
                        </PrivateRouterAdmin>
                    } />
                    :
                   
                    <Route path="cliente/*" element={
                            <PrivateRouter isLogged={isLogged} >
                                <DashboardRouter />
                            </PrivateRouter>
                        }
                        />
                    // console.log("El cliente")
                }
                {/* {rol === 'Cliente' ?
                    
                    :
                    null
                } */}
                

            </Routes>

        </BrowserRouter>
    )
}

export default AppRouter
