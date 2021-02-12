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
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'Pendiente', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'Financiera En Proceso', 'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'Comprado', 'ver', 'ver', 'ver', 'ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'Pendiente', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'Financiera En Proceso', 'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'Comprado', 'ver', 'ver', 'ver','ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'Pendiente', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'Financiera En Proceso', 'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'Comprado', 'ver', 'ver', 'ver', 'ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'Pendiente', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'Financiera En Proceso', 'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'Comprado', 'ver', 'ver', 'ver','ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'Pendiente', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'Financiera En Proceso', 'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'Comprado', 'ver', 'ver', 'ver', 'ver'),
        createData('28/12/2020', 437, '6/1/2021', 'Drazile Mabel', 'Daniel Rodolfi' , 'Contaduría General' , 'Pendiente', 'ver', 'ver', 'ver', 'ver'),
        createData('26/12/2020', 435, '8/1/2021', 'Lelli Alejandra', 'Monica Zornberg', 'Secretaría Administración', 'Financiera En Proceso', 'ver', 'ver', 'ver', 'ver'),
        createData('23/12/2020', 431, '13/1/2021', 'Lelli Alejandra', 'Santiago De La Rosa', 'Secretaría Legal & Técnica', 'Comprado', 'ver', 'ver', 'ver','ver'),
    ];
    
    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: 440,
            
        },
        table:{
            backgroundColor: '#424242',
            color: 'white',
        }
    });
    

    return (
        <>
            <hr/>
            <Tabla 
                useStyles =  { useStyles } 
                rows = { rows }
                columns = { columns }
            />
        </>
    )
}
