
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import Tabla from '../components/Tabla';
import Button from '@material-ui/core/Button';

export const Detalle = ({ history }) => {

    const  { reqId } = useParams();

    console.log(reqId);

    const columns = [
        { id: 'cantidad', label: 'Cantidad', minWidth: 20, align: 'center' },
        { id: 'aComprar', label: 'a Comprar', minWidth: 20, align: 'center' },
        { id: 'descripcionRequerido', label: 'Descripcion (Requerido)', minWidth: 150, align: 'center' },
        { id: 'descripcionComprar', label: 'Descipción (a Comprar)', minWidth: 150, align: 'center' },
        { id: 'estimado', label: 'Estimado', minWidth: 50, align: 'center' },
        { id: 'precio', label: 'Precio', minWidth: 50, align: 'center' }
    ]

    function createData(cantidad, aComprar, descripcionRequerido, descripcionComprar, estimado, precio) {
        return {cantidad, aComprar, descripcionRequerido, descripcionComprar, estimado, precio};
    }

    const reqs = [
        {   id: 435,
            detalle : [
            createData(10, 8, 'NoteBook', '8Mb Disco Solido', 'NoteBook LENOVO SG-1030', '$ 43.000,00', '$ 54.000,00'),
            createData(2, 2, 'Impresora Laser', 'Impresora EPSON TX-105', '$ 8.000,00', '$ 8.250,00'),
            createData(5, 4, 'Mouse a Laser', 'Mouser a Laser logitch', '$ 800', '$ 1100'),
            createData(10, 8, 'NoteBook', '8Mb Disco Solido', 'NoteBook LENOVO SG-1030', '$ 43.000,00', '$ 54.000,00'),
            createData(2, 2, 'Impresora Laser', 'Impresora EPSON TX-105', '$ 8.000,00', '$ 8.250,00'),
            createData(5, 4, 'Mouse a Laser', 'Mouser a Laser logitch', '$ 800', '$ 1100')
        ]
        },
        {   id: 437,
            detalle : [
            createData(10, 8, 'NoteBook', '8Mb Disco Solido', 'NoteBook LENOVO SG-1030', '$ 43.000,00', '$ 54.000,00'),
            createData(2, 2, 'Impresora Laser', 'Impresora EPSON TX-105', '$ 8.000,00', '$ 8.250,00'),
            createData(5, 4, 'Mouse a Laser', 'Mouser a Laser logitch', '$ 800', '$ 1100')
        ]
        },
        {   id: 431,
            detalle : [
            createData(10, 8, 'NoteBook', '8Mb Disco Solido', 'NoteBook LENOVO SG-1030', '$ 43.000,00', '$ 54.000,00'),
            createData(2, 2, 'Impresora Laser', 'Impresora EPSON TX-105', '$ 8.000,00', '$ 8.250,00'),
            createData(5, 4, 'Mouse a Laser', 'Mouser a Laser logitch', '$ 800', '$ 1100'),
            createData(10, 8, 'NoteBook', '8Mb Disco Solido', 'NoteBook LENOVO SG-1030', '$ 43.000,00', '$ 54.000,00'),
            createData(2, 2, 'Impresora Laser', 'Impresora EPSON TX-105', '$ 8.000,00', '$ 8.250,00'),
            createData(5, 4, 'Mouse a Laser', 'Mouser a Laser logitch', '$ 800', '$ 1100'),
            createData(10, 8, 'NoteBook', '8Mb Disco Solido', 'NoteBook LENOVO SG-1030', '$ 43.000,00', '$ 54.000,00'),
            createData(2, 2, 'Impresora Laser', 'Impresora EPSON TX-105', '$ 8.000,00', '$ 8.250,00'),
            createData(5, 4, 'Mouse a Laser', 'Mouser a Laser logitch', '$ 800', '$ 1100'),
            createData(10, 8, 'NoteBook', '8Mb Disco Solido', 'NoteBook LENOVO SG-1030', '$ 43.000,00', '$ 54.000,00'),
            createData(2, 2, 'Impresora Laser', 'Impresora EPSON TX-105', '$ 8.000,00', '$ 8.250,00'),
            createData(5, 4, 'Mouse a Laser', 'Mouser a Laser logitch', '$ 800', '$ 1100')
        ]
        }
    ]

     const req = reqs.find( r => r.id === parseInt( reqId));

     console.log(req);

    const useStyles = makeStyles((theme)=>({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: 440,
            
        },
        table:{
            backgroundColor: '#424242',
            color: 'white',
        },
        botton : {
            root: {
                '& > *': {
                    marginTop: '100p',
                  margin: theme.spacing(8),
                },
              },
        }
    }));

    const classes = useStyles();

    const handleClick = () => {
        history.goBack();
    }
    
    return (
        <>
            <hr/>
            <h1>NúmeroReq: {reqId}</h1>
            <Tabla
                useStyles =  { useStyles } 
                rows = { req.detalle }
                columns = { columns }
            />
            
            <Button variant="contained" color="primary" className = { classes.botton.root} onClick = {handleClick} >
                volver
            </Button>
            <Button variant="contained" color="primary" className = { classes.botton.root}>
                EMITIR Solicitud Compra
            </Button>
            
            
        </>
    )
}
