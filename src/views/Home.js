import React from 'react';
import Tabla from '../components/Tabla';
import { makeStyles } from '@material-ui/core/styles';

export const Home = () => {

    const columns = [
        { id: 'fecha', label: 'Fecha', minWidth: 50, align: 'center'},
        { id: 'numero', label: 'Número', minWidth: 50, align: 'center'},
        { id: 'necesidad', label: 'Necesidad', minWidth: 50, align: 'center'},
        { id: 'solicitante', label: 'Solicitante', minWidth: 50, align: 'center'},
        { id: 'autorizante', label: 'Autorizante', minWidth: 50, align: 'center' },
        { id: 'area', label: 'Area', minWidth: 50, align: 'center' },
        { id: 'estado', label: 'ESTADO', minWidth: 50, align: 'center' },
        { id: 'detalle', label: 'DETALLE', minWidth: 50, align: 'center' },
        { id: 'req', label: 'REQ', minWidth: 20, align: 'center' },
        { id: 'eDoc', label: 'eDOC', minWidth: 20, align: 'center' },
        { id: 'eExp', label: 'eEXP', minWidth: 20, align: 'center' },
    ];
    
    function createData(fecha, numero, necesidad, solicitante, autorizante, area, estado, detalle, req, eDoc, eExp) {
        return {fecha, numero, necesidad, solicitante, autorizante, area, estado, detalle, req, eDoc, eExp};
    }
    
    const rows = [
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' ,'cancelado', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'finalizado', 'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'pendiente', 'ver', 'ver', 'ver', 'ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General', 'cancelado', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'pendiente',  'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'finalizado',  'ver', 'ver', 'ver','ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'cancelado', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'pendiente',  'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica','pendiente', 'ver', 'ver', 'ver', 'ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'cancelado','ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'pendiente',  'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'finalizado', 'ver', 'ver', 'ver','ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'finalizado', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'pendiente', 'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'finalizado', 'ver', 'ver', 'ver', 'ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'cancelado', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'pendiente',  'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'finalizado', 'ver', 'ver', 'ver','ver'),
    ];
    
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
        roott: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          },
          footer: {
            padding: theme.spacing(3, 2),
            marginTop: 'auto',
            backgroundColor:
              theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
          },
          formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
          },
          selectEmpty: {
            marginTop: theme.spacing(2),
          },
    }));

    return (
        <>
            <Tabla 
                useStyles =  { useStyles } 
                rows = { rows }
                columns = { columns }
            />
        </>
    )
}
