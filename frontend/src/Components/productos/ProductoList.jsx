import React from 'react'
// import { Link } from 'react-router-dom'

const ProductoList = (item) => {
    const categoria = item.categoria.nombre
    const {nombre,imagen,descripcion} =item
    return (
        <div className="col-12 col-sm-8 col-md-4 mt-4">
            <div className="card h-100">
                <div className="card-body">
                    <img src={imagen} className="card-img-top" alt={nombre} />
                    <h3 className="card-title">{nombre}</h3>
                    <h5 className="card-title">{categoria}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
                <div className="card-footer">
                    {/* <Link
                        to={`/`}> */}
                        Añadir al carrito
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default ProductoList
