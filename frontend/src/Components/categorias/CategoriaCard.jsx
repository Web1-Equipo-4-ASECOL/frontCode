import React from 'react'
// import { Link } from "react-router-dom";

const CategoriaCard = ({_id,nombre,descripcion}) => {
    return (
        <div className="col col-sm-3 col-md-3 mb-3">
            <div className="card h-100 ">
                {/* <img src={`/assets/${id}.jpg`} className="card-img-top" alt={superhero} /> */}
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{descripcion}</li>
                    </ul>
                </div>
                {/* <div className="card-footer">
                    <Link
                        to={`/productos`}>
                        Ver más...
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default CategoriaCard
