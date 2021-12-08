import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Modal, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useDispatch, useSelector } from 'react-redux';
// import { setError } from '../../actions/ui';
import { style } from '../../assets/styleModal';



const ProductosDT = () => {
    // const dispatch = useDispatch();
    // const { msgError } = useSelector(state => state.ui)
    // const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [listaProductos, setListaProductos] = useState([])
    const [id, setId] = useState()
    const [modal, setModal] = useState('')
    const [value, setValue] = useState(false)
    const [listaCategorias, setListaCategorias] = useState()
    const [formValues, handleInputChange] = useForm({
        nombre: '',
        categoria: '',
        descripcion: '',
        precio: '',
        codigo: '',
        imagen: '',

    });
    const { nombre, categoria, descripcion, precio, codigo, imagen } = formValues;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAdd = () => {

        setModal('Add')
        formValues.nombre = ''
        formValues.categoria = ''
        formValues.descripcion = ''
        formValues.precio = ''
        formValues.codigo = ''
        formValues.imagen = ''
        handleOpen()
    }

    const handleEdit = (item) => {
        setModal('Edit')
        setId(item._id)
        formValues.nombre = item.nombre
        formValues.categoria = item.categoria.nombre
        formValues.descripcion = item.descripcion
        formValues.precio = item.precio
        formValues.codigo = item.codigo
        formValues.imagen = item.imagen
        handleOpen()
    }
    const handleDelete = (id) => {
        axios.delete(`https://app-asecol.herokuapp.com/api/producto/remove?_id=${id}`
        )
            .then((response) => {
                console.log(response)
                setListaProductos(response.data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    useEffect(() => {
        fetchlistaProductos();
        fetchListaCategorias();
    }, []);

    const fetchlistaProductos = () => {
        // setLoading(true);
        axios.get('https://app-asecol.herokuapp.com/api/producto/list')
            .then(responseJson => {
                setListaProductos(responseJson.data)
            })
            .catch(error => {
                console.log(error.message)
            })
        // setLoading(false);
    }
    const fetchListaCategorias = () => {
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

    const handleSave = (e, nombre, categoria, descripcion, precio, codigo, imagen) => {
        e.preventDefault();
        if (modal === 'Add') {
            console.log(nombre, categoria, descripcion, precio, codigo, imagen)
            axios.post('https://app-asecol.herokuapp.com/api/producto/add', {
                nombre: nombre,
                categoria: categoria,
                descripcion: descripcion,
                precio: precio,
                codigo: codigo,
                imagen: imagen,
            })
                .then((response) => {
                    setListaProductos(response.data);
                })
            handleClose()
            e.preventDefault();
        }
        if (modal === 'Edit') {
            // setLoading(true)
            axios.put('https://app-asecol.herokuapp.com/api/producto/update', {
                _id: id,
                nombre: nombre,
                categoria: categoria,
                descripcion: descripcion,
                precio: precio,
                codigo: codigo,
                imagen: imagen,
            })
                .then((response) => {
                    setListaProductos(response.data);
                });
            handleClose()
            // setLoading(false)
            e.preventDefault();
        }
    }


    const handleToggle = (item, index) => {

        setValue(!value)
        if (listaProductos[index].estado === 1) {
            // setLoading(true)
            axios.put('https://app-asecol.herokuapp.com/api/producto/disabled', {
                _id: item._id
            })
                .then((response) => {
                    setListaProductos(response.data)
                    // setEstado(false)
                })
            // setLoading(false)
        } else {
            // setLoading(true)
            axios.put('https://app-asecol.herokuapp.com/api/producto/enabled', {
                _id: item._id
            })
                .then((response) => {
                    setListaProductos(response.data);
                    //    setEstado(true)
                })
            // setLoading(false)
        }
    }

    return (
        <div>
            <div style={{ justifyContent: "center" }} className="row">
                <h1 style={{ width: "80%" }}>Productos</h1>
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
                            <TableCell><b>Código</b></TableCell>
                            <TableCell><b>Nombre</b></TableCell>
                            <TableCell><b>Categoría</b></TableCell>
                            <TableCell><b>Descripción</b></TableCell>
                            <TableCell><b>Precio</b></TableCell>
                            <TableCell><b>Estado</b></TableCell>
                            <TableCell><b>Actiones</b></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {listaProductos.map((item, index) => (
                            // console.log(index,item)
                            <TableRow
                                key={item._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                {/* <TableCell component="th" scope="row">
                                        {index}
                                    </TableCell> */}
                                <TableCell component="th" scope="row">{item.codigo}</TableCell>
                                <TableCell>{item.nombre}</TableCell>
                                <TableCell>{item.categoria.nombre}</TableCell>
                                <TableCell>{item.descripcion}</TableCell>
                                <TableCell>{item.precio}</TableCell>
                                <TableCell>{item.estado}</TableCell>
                                <TableCell>
                                    <ModeEditIcon color="primary" onClick={() => { handleEdit(item) }} />
                                    <DeleteIcon color="primary" onClick={() => { handleDelete(item._id) }} />
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
                            sx={{ mt: 4, mr: 4 }}
                            id="outlined-descripcion"
                            label="Codigo"
                            type="text"
                            name="codigo"
                            value={codigo}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            sx={{ mt: 4, mr: 4 }}
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
                            id="outlined-nombre"
                            label="Categoria"
                            type="text"
                            name="categoria"
                            value={categoria}
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
                        <TextField
                            sx={{ mt: 4, mr: 4 }}
                            id="outlined-descripcion"
                            label="Precio"
                            type="text"
                            name="precio"
                            value={precio}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            sx={{ mt: 4, mr: 4 }}
                            id="outlined-descripcion"
                            label="Imagen"
                            type="text"
                            name="imagen"
                            value={imagen}
                            onChange={handleInputChange}
                            required
                        />
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="outlined-categoria"
                                label="Categoria"
                                value={listaCategorias}
                                onChange={(e) => { setListaCategorias(e.target.value) }} 
                            >
                            {(listaCategorias ||[]).map((item, i) => {
                            return (
                            <MenuItem key={i} value={categoria}>
                        {item.nombre}
                            </MenuItem>
                        );
                        })}
                            </Select>
                        </FormControl>
                        <Button variant="text" onClick={handleClose}>CANCELAR</Button>
                        <Button variant="text" onClick={(e) => handleSave(e, nombre, categoria, descripcion, precio, codigo, imagen)}>GUARDAR</Button>
                    </Box>
                </Box>
            </Modal>
        </div >
    );
}

export default ProductosDT
