import React from "react";
import user from '../assets/img/user.png';
function TheTeam(){
    return(
        <section className="users" id="users">
            <h1 className="heading heading-top">NOSOTROS</h1>
            <div className="box-container">
            <div className="box">
                    <img src={user} alt="usuario"/>
                    <h3>Jhon Fredy</h3>
                    <div className="blue-border"></div>
                </div>
                <div className="box">
                    <img src={user} alt="usuario"/>
                    <h3>Maria</h3>
                    <div className="blue-border"></div>
                </div>
                <div className="box">
                    <img src={user} alt="usuario"/>
                    <h3>Ana Maria</h3>
                    <div className="blue-border"></div>
                </div>
                <div className="box">
                    <img src={user} alt="usuario"/>
                    <h3>Estefania</h3>
                    <div className="blue-border"></div>
                </div>
                <div className="box">
                    <img src={user} alt="usuario"/>
                    <h3>Cristhian</h3>
                    <div className="blue-border"></div>
                </div>
            </div>
        </section>
    );
}

export default TheTeam;