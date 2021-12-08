import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';


const ComprasDT = () => {
    // const dispatch = useDispatch();
    // const { msgError } = useSelector(state => state.ui)
    // const [loading, setLoading] = useState(true);
    const [listaCompras, setListaCompras] = useState([])


    useEffect(() => {
        fetchlistaProductos();
    }, []);

    const fetchlistaProductos = () => {
        axios.get('https://app-asecol.herokuapp.com/api/compra/list')
            .then(responseJson => {
                setListaCompras(responseJson.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    // const listaUser = () =>{

    //     axios.get('https://app-asecol.herokuapp.com/api/compra/list')
    //         .then(responseJson => {
    //             setListaCompras(responseJson.data)
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // }


    const handleToggle = (item, index) => {

        if (listaCompras[index].estado === 1) {
            console.log("desabilitar")
            axios.put('https://app-asecol.herokuapp.com/api/compra/disabled', {
                _id: item._id
            })
                .then((response) => {
                    setListaCompras(response.data)
                })
        } else {
            axios.put('https://app-asecol.herokuapp.com/api/compra/enabled', {
                _id: item._id
            })
                .then((response) => {
                    setListaCompras(response.data);
                })
        }
    }

    return (
        <div>
           
            <div  className="row">
                <h1>Compras</h1>
            </div>
            <hr />
            {/* {loading && <div>Loading</div>}
            {!loading && ( */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell><b>#</b></TableCell> */}
                            <TableCell><b>Código</b></TableCell>
                            <TableCell><b>Usuario</b></TableCell>
                            <TableCell><b>Descripción</b></TableCell>
                            <TableCell><b>Productos</b></TableCell>
                            <TableCell><b>Total</b></TableCell>
                            <TableCell><b>Estado</b></TableCell>
                            <TableCell><b>Actiones</b></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {listaCompras.map((item, index) => (
                            // console.log(index,item)
                            <TableRow
                                key={item._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{item.codigo}</TableCell>
                                <TableCell>{item.user_compra}</TableCell>
                                <TableCell>{item.descripcion}</TableCell>
                                <TableCell>{item.producto.nombre}</TableCell>
                                <TableCell>{item.total}</TableCell>
                                <TableCell>{item.estado}</TableCell>
                                <TableCell>
                                    <span onClick={() => { handleToggle(item, index) }}>
                                        {item.estado === 1 ? <ToggleOnIcon color="primary" fontSize="large" /> : <ToggleOffIcon fontSize="large" />}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

export default ComprasDT
