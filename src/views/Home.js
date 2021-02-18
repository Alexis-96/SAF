import React from 'react';
import Tabla from '../components/Tabla';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';

export const Home = () => {

    const columns = [
        { id: 'id', label: 'ID', minWidth: 50, align: 'center'},
        { id: 'solicitante', label: 'Solicitante', minWidth: 20, align: 'center'},
        { id: 'areaSolicitante', label: 'Area solicitante', minWidth: 50, align: 'center'},
        { id: 'fechaSolicitud', label: 'Fecha de Solicitud', minWidth: 50, align: 'center'},
        { id: 'limiteEntrega', label: 'Limite de entrega', minWidth: 50, align: 'center' },
        { id: 'estado', label: 'Estado', minWidth: 50, align: 'center' },
        { id: 'autorizante', label: 'Autorizante', minWidth: 50, align: 'center' },
        { id: 'actions', label: '', minWidth: 50, align: 'center' }
    ];
    
    function createData(id, solicitante, areaSolicitante, fechaSolicitud, limiteEntrega, estado, autorizante, actions) {
        return {id, solicitante, areaSolicitante, fechaSolicitud, limiteEntrega, estado, autorizante, actions};
    }

    const rows = [
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
        createData('1', 'Drazile Mabel Drazile Mbel Drazile Mabel', 'Daniel Rodolfi' , '26/12/2020' ,'26/12/2020', 'cancelado', 'autorizante 1', 'actions'),
      
    ];

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',

        },
        container: {
            maxHeight: 440,

        },
        table: {
            backgroundColor: '#424242',
            color: 'white',
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
                useStyles={useStyles}
                rows={rows}
                columns={columns}
            />
            <Footer/>
        </>
    )
}
