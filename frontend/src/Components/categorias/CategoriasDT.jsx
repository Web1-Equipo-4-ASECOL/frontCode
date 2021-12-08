import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Modal, TextField, Alert } from '@mui/material';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../actions/ui';
import { style } from '../../assets/styleModal';

const CategoriasDT = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui)
    // const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [listaCategorias, setListaCategorias] = useState([])
    const [id, setId] = useState()
    const [modal, setModal] = useState('')
    const [value, setValue] = useState(false)
    // const [estado, setEstado] = useState()

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        descripcion: ''
    });
    const { nombre, descripcion } = formValues;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAdd = () => {
        setModal('Add')
        formValues.nombre = ''
        formValues.descripcion = ''
        handleOpen()
    }

    const handleEdit = (item) => {
        setModal('Edit')
        setId(item._id)
        formValues.nombre = item.nombre
        formValues.descripcion = item.descripcion
        handleOpen()

    }

    useEffect(() => {
        fetchlistaCategorias();
    }, []);

    const fetchlistaCategorias = () => {
        // setLoading(true);
        axios.get('https://app-asecol.herokuapp.com/api/categoria/list')
            .then(responseJson => {
                setListaCategorias(responseJson.data)
            })
            .catch(error => {
                console.log(error.message)
            })
        // setLoading(false);
    }

    const handleSave = (e, nombre, descripcion) => {
        e.preventDefault();
        if (modal === 'Add') {
            axios.post('https://app-asecol.herokuapp.com/api/categoria/add', {
                nombre: nombre,
                descripcion: descripcion
            })
                .then((response) => {
                    setListaCategorias(response.data);
                }).catch(error => {
                    dispatch(setError('Error! Esta categoria ya existe'))
                    // console.log(error.message)
                })
            handleClose()
            e.preventDefault();
        }
        if (modal === 'Edit') {
            // setLoading(true)
            axios.put('https://app-asecol.herokuapp.com/api/categoria/update', {
                _id: id,
                nombre: nombre,
                descripcion: descripcion
            })
                .then((response) => {
                    setListaCategorias(response.data);
                });
            handleClose()
            // setLoading(false)
            e.preventDefault();
        }
    }


    const handleToggle = (item, index) => {

        setValue(!value)
        if (listaCategorias[index].estado === 1) {
            // setLoading(true)
            axios.put('https://app-asecol.herokuapp.com/api/categoria/disabled', {
                _id: item._id
            })
                .then((response) => {
                    setListaCategorias(response.data)
                    // setEstado(false)
                })
            // setLoading(false)
        } else {
            // setLoading(true)
            axios.put('https://app-asecol.herokuapp.com/api/categoria/enabled', {
                _id: item._id
            })
                .then((response) => {
                    setListaCategorias(response.data);
                    //    setEstado(true)
                })
            // setLoading(false)
        }
    }

    return (
        <div>
            <div>
                {
                    msgError && (
                        <Alert severity="error"> {msgError}</Alert>
                    )
                }
                <br />
            </div>
            <div style={{ justifyContent: "center" }} className="row">
                <h1 style={{ width: "80%" }}>Categorias</h1>
                <Button color="primary" variant="contained" onClick={handleAdd}>AÑADIR CATEGORIA</Button>
            </div>
            <hr />
            {/* {loading && <div>Loading</div>}
            {!loading && ( */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell><b>#</b></TableCell> */}
                            <TableCell><b>ID</b></TableCell>
                            <TableCell><b>Nombre</b></TableCell>
                            <TableCell><b>Descripción</b></TableCell>
                            <TableCell><b>Estado</b></TableCell>
                            <TableCell><b>Actiones</b></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {listaCategorias.map((item, index) => (
                            // console.log(index,item)
                            <TableRow
                                key={item._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                {/* <TableCell component="th" scope="row">
                                        {index}
                                    </TableCell> */}
                                <TableCell component="th" scope="row">{item._id}</TableCell>
                                <TableCell>{item.nombre}</TableCell>
                                <TableCell>{item.descripcion}</TableCell>
                                <TableCell>{item.estado}</TableCell>
                                <TableCell>
                                    <ModeEditIcon color="primary" onClick={() => { handleEdit(item) }} />
                                    <span onClick={() => { handleToggle(item, index) }}>
                                        {item.estado === 1 ? <ToggleOnIcon color="primary" fontSize="large" /> : <ToggleOffIcon fontSize="large" />}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* )} */}
            < Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 id="modal-modal-title" >
                        {modal === "Edit" ? 'Editando categoria' : 'Agredando categoria'}
                    </h2>
                    <Box
                        component="form">
                        <TextField
                            sx={{ mt: 4, mr: 4  }}
                            id="outlined-nombre"
                            label="Nombre"
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            sx={{ mt: 4, mr: 4 }}
                            id="outlined-descripcion"
                            label="Descripción"
                            type="text"
                            name="descripcion"
                            value={descripcion}
                            onChange={handleInputChange}
                            required
                        />

                        <Button variant="text" onClick={handleClose}>CANCELAR</Button>
                        <Button variant="text" onClick={(e) => handleSave(e, nombre, descripcion)}>GUARDAR</Button>
                    </Box>
                </Box>
            </Modal>
        </div >
    );
}

export default CategoriasDT
