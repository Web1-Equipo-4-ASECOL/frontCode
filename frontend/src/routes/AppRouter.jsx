import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home';
// import DashboardRouter from './DashboardRouter';
import Login from '../Components/login/Login';
import SingUp from '../Components/login/SingUp';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={
                        <Home/>
                    } />
                <Route path="/login" element={
                        <Login/>
                    } />
                    <Route path="/signup" element={
                        <SingUp/>
                    } />
                
                {/* <Route path="/*" element={
                    <PrivateRouter>
                        <DashboardRouter/>
                    </PrivateRouter>
                } /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
