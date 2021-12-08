import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, Modal, TextField, Alert } from '@mui/material';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../actions/ui';
import { style } from '../../assets/styleModal';

const UsuariosDT = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui)
    const [open, setOpen] = useState(false);
    const [listaUsuarios, setListaUsuarios] = useState([])
    // const [rol, setRol] = useState(['Cliente','Administrador'])
    const [id, setId] = useState()
    const [modal, setModal] = useState('')

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        correo: '',
        password: '',
        rol:''
    });
    const { nombre, correo, password,rol } = formValues;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAdd = () => {
        setModal('Add')
        formValues.nombre = ''
        formValues.correo = ''
        formValues.password = ''
        formValues.rol = ''
        handleOpen()
    }

    const handleEdit = (item) => {
        setModal('Edit')
        setId(item._id)
        formValues.nombre = item.nombre
        formValues.correo = item.correo
        formValues.password = item.password
        formValues.rol = item.rol
        handleOpen()

    }

    useEffect(() => {
        fetchListaUsuarios();
    }, []);

    const fetchListaUsuarios = () => {
        axios.get('https://app-asecol.herokuapp.com/api/usuario/list')
            .then(responseJson => {
                setListaUsuarios(responseJson.data)
            })
            .catch(error => {
                console.log(error.message)
            });
    }

    const handleSave = ( nombre, correo,password,rol) => {
        if (modal === 'Add') {
            console.log("Añadir")
            axios.post('https://app-asecol.herokuapp.com/api/usuario/add', {
                nombre: nombre,
                correo: correo,
                password: password,
                rol: rol
            })
                .then((response) => {
                    setListaUsuarios(response.data);

                }).catch(error => {
                    dispatch(setError('Error! Este usuario ya existe'))
                    // console.log(error.message)
                })
            handleClose()
        }
        if (modal === 'Edit') {
            console.log("Editar")
            axios.put('https://app-asecol.herokuapp.com/api/usuario/update', {
                _id: id,
                nombre: nombre,
            })
                .then((response) => {
                    setListaUsuarios(response.data);
                });
            handleClose()
        }
    }

    const handleToggle = (item, index) => {

        if (listaUsuarios[index].estado === 1) {

            // setLoading(true)
            axios.put('https://app-asecol.herokuapp.com/api/usuario/disabled', {
                _id: item._id
            })
                .then((response) => {
                    setListaUsuarios(response.data)
                    // setEstado(false)
                })

            // setLoading(false)
        } else {
            // setLoading(true)
            axios.put('https://app-asecol.herokuapp.com/api/usuario/enabled', {
                _id: item._id
            })
                .then((response) => {
                    setListaUsuarios(response.data);
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
                <h1 style={{ width: "85%" }}>Usuarios</h1>
                <Button color="primary" variant="contained" onClick={handleAdd}>AÑADIR USUARIO</Button>
            </div>
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>ID</b></TableCell>
                            <TableCell><b>Nombre</b></TableCell>
                            <TableCell><b>Email</b></TableCell>
                            <TableCell><b>Rol</b></TableCell>
                            <TableCell><b>Estado</b></TableCell>
                            <TableCell><b>Actiones</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaUsuarios.map((item, index) => (
                            <TableRow
                                key={item._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item._id}
                                </TableCell>
                                <TableCell>{item.nombre}</TableCell>
                                <TableCell>{item.correo}</TableCell>
                                <TableCell>{item.rol}</TableCell>
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2 id="modal-modal-title" >
                        {modal === "Edit" ? 'Editando usuario' : 'Agredando usuario'}
                    </h2>
                    <Box
                        component="form">
                        <TextField
                            sx={{ mt: 4, mr: 4 }}
                            id="outlined-nombre"
                            label="Nombre"
                            type="text"
                            autoComplete="off"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            sx={{ mt: 4, mr: 4 }}
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="off"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            required={modal === "Edit"? false : true } 
                            disabled={modal === "Edit"? true : false }                        
                        />
                        <TextField
                            sx={{ mt: 4, mr: 4 }}
                            id="outlined-email"
                            label="Correo"
                            type="email"
                            autoComplete="off"
                            name="correo"
                            value={correo}
                            onChange={handleInputChange}
                            required={modal === "Edit"? false : true } 
                            disabled={modal === "Edit"? true : false }
                        />
                        <TextField
                            sx={{ mt: 4, mr: 4 }}
                            id="outlined-email"
                            label="Rol"
                            type="text"
                            autoComplete="off"
                            name="rol"
                            value={rol}
                            onChange={handleInputChange}
                            disabled={modal === "Edit"? true : false }
                        />
                        {/* <FormControl sx={{ mt: 4, mr: 4, minWidth: 225 }}>
                            <InputLabel id="demo-simple-select-label">Rol</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Rol"
                            >
                                <MenuItem selected>None</MenuItem>
                                {rol.map((item) => (
                                <MenuItem key={item} value={item}>{setRol(item)}</MenuItem>
                            ))}
                            </Select>
                            
                        </FormControl> */}
                        <Button variant="text" onClick={handleClose}>CANCELAR</Button>
                        <Button variant="text" onClick={handleSave(nombre,correo,password,rol)}>GUARDAR</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default UsuariosDT
