import React from "react";
import user from '../../assets/img/user.png';
const TheTeam = () => {
    return(
        <section className="users" id="users">
            <h1 className="heading">NOSOTROS</h1>
            <div className="box-container">
                <div className="box">
                    <img src={user} alt="usuario"/>
                    <h3>Estefania</h3>
                </div>
            </div>
        </section>
    );
}

export default TheTeam;