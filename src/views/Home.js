import React from 'react';
import Tabla from '../components/Tabla';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import FiltroTablaHome from '../components/FiltroTablaHome';
import { useSortTable } from '../hooks/useSortTable';

export const Home = () => {

    const columns = [
        { id: 'id', label: 'ID', minWidth: 50, align: 'center'},
        { id: 'solicitante', label: 'Solicitante', minWidth: 20, maxWidth:250, align: 'center'},
        { id: 'areaSolicitante', label: 'Area solicitante', minWidth: 50, align: 'center'},
        { id: 'fechaSolicitud', label: 'Fecha de Solicitud', minWidth: 50, align: 'center'},
        { id: 'limiteEntrega', label: 'Limite de entrega', minWidth: 50, align: 'center' },
        { id: 'estado', label: 'Estado', minWidth: 50, align: 'center' },
        { id: 'autorizante', label: 'Autorizante', minWidth: 150, align: 'center' },
        { id: 'actions', label: '', minWidth: 50, align: 'center' }
    ];
    
    function createData(id, solicitante, areaSolicitante, fechaSolicitud, limiteEntrega, estado, autorizante, actions) {
        return {id, solicitante, areaSolicitante, fechaSolicitud, limiteEntrega, estado, autorizante, actions};
    }

    const rows = [
        createData(1, 'Drazile Mabel Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel  ', 'Contaduría General' , '28/12/2020' ,'6/1/2021 ', 'cancelado', 'Daniel Rodolfi', 'actions'),
        createData(2, 'Perez Alberto Ramon Dias', 'Secretaría Administración Financiera' , '26/12/2020' ,'8/1/2021', 'pendiente', 'Monica Zornberg', 'actions'),
        createData(3, 'Lelli Alejandra', 'Secretaría Legal & Técnica' , '23/12/2020' ,'13/1/2021', 'cancelado', 'Santiago De La Rosa', 'actions'),
        createData(4, 'Drazile Mabel Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel', 'Contaduría General' , '28/12/2020' ,'6/1/2021 ', 'cancelado', 'Daniel Rodolfi', 'actions'),
        createData(5, 'Perez Alberto Ramon Dias', 'Secretaría Administración Financiera' , '26/12/2020' ,'8/1/2021', 'finalizado', 'Monica Zornberg', 'actions'),
        createData(6, 'Lelli Alejandra', 'Secretaría Legal & Técnica' , '23/12/2020' ,'13/1/2021', 'cancelado', 'Santiago De La Rosa', 'actions'),
        createData(7, 'Drazile Mabel Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel', 'Contaduría General' , '28/12/2020' ,'6/1/2021 ', 'cancelado', 'Daniel Rodolfi', 'actions'),
        createData(8, 'Perez Alberto Ramon Dias', 'Secretaría Administración Financiera' , '26/12/2020' ,'8/1/2021', 'finalizado', 'Monica Zornberg', 'actions'),
        createData(9, 'Lelli Alejandra', 'Secretaría Legal & Técnica' , '23/12/2020' ,'13/1/2021', 'finalizado', 'Santiago De La Rosa', 'actions'),
        createData(10, 'Drazile Mabel Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel', 'Contaduría General' , '28/12/2020' ,'6/1/2021 ', 'cancelado', 'Daniel Rodolfi', 'actions'),
        createData(11, 'Perez Alberto Ramon Dias', 'Secretaría Administración Financiera' , '26/12/2020' ,'8/1/2021', 'pendiente', 'Monica Zornberg', 'actions'),
        createData(2, 'Lelli Alejandra', 'Secretaría Legal & Técnica' , '23/12/2020' ,'13/1/2021', 'cancelado', 'Santiago De La Rosa', 'actions'),
        createData(13, 'Drazile Mabel Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel', 'Contaduría General' , '28/12/2020' ,'6/1/2021 ', 'cancelado', 'Daniel Rodolfi', 'actions'),
        createData(14, 'Perez Alberto Ramon Dias', 'Secretaría Administración Financiera' , '26/12/2020' ,'8/1/2021', 'finalizado', 'Monica Zornberg', 'actions'),
        createData(15, 'Lelli Alejandra', 'Secretaría Legal & Técnica' , '23/12/2020' ,'13/1/2021', 'cancelado', 'Santiago De La Rosa', 'actions'),
        createData(16, 'Drazile Mabel Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel', 'Contaduría General' , '28/12/2020' ,'6/1/2021 ', 'cancelado', 'Daniel Rodolfi', 'actions'),
        createData(17, 'Perez Alberto Ramon Dias', 'Secretaría Administración Financiera' , '26/12/2020' ,'8/1/2021', 'pendiente', 'Monica Zornberg', 'actions'),
        createData(18, 'Lelli Alejandra', 'Secretaría Legal & Técnica' , '23/12/2020' ,'13/1/2021', 'cancelado', 'Santiago De La Rosa', 'actions'),
        createData(19, 'Drazile Mabel Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel', 'Contaduría General' , '28/12/2020' ,'6/1/2021 ', 'cancelado', 'Daniel Rodolfi', 'actions'),
        createData(20, 'Perez Alberto Ramon Dias', 'Secretaría Administración Financiera' , '26/12/2020' ,'8/1/2021', 'pendiente', 'Monica Zornberg', 'actions'),
        createData(21, 'Lelli Alejandra', 'Secretaría Legal & Técnica' , '23/12/2020' ,'13/1/2021', 'cancelado', 'Santiago De La Rosa', 'actions'),
        createData(22, 'Lelli Alejandra', 'Secretaría Legal & Técnica' , '23/12/2020' ,'13/1/2021', 'finalizado', 'Santiago De La Rosa', 'actions'),
        createData(23, 'Drazile Mabel Drazile Mbel Drazile Mabel  Drazile Mbel Drazile Mabel', 'Contaduría General' , '28/12/2020' ,'6/1/2021 ', 'cancelado', 'Daniel Rodolfi', 'actions'),
        createData(24, 'Perez Alberto Ramon Dias', 'Secretaría Administración Financiera' , '26/12/2020' ,'8/1/2021', 'pendiente', 'Monica Zornberg', 'actions'),
        createData(25, 'Lelli Alejandra', 'Secretaría Legal & Técnica' , '23/12/2020' ,'13/1/2021', 'finalizado', 'Santiago De La Rosa', 'actions'),
      
    ];
   /*  function createData(nombre,edad, actions) {
        return {nombre,edad, actions};
    }
    const columns = [
        { id: 'nombre', label: 'NOMBRE', minWidth: 50, align: 'center'},
        { id: 'edad', label: 'EDAD', minWidth: 50, align: 'center'},
        { id: 'actions', label: '', minWidth: 50, align: 'center' }
    ]

    const rows = [
        createData('juan', 50, 'actions'),
        createData('alberto', 40, 'actions'),
        createData('aragor', 2000, 'actions'),
    ] */

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

    const [list, setList, sort] = useSortTable(rows, 'fechaSolicitud');

    return (
        <>
            <FiltroTablaHome
                list = {list}
                setList = {setList}
            />
            <Tabla
                useStyles={useStyles}
                rows={rows}
                columns={columns}
                list = {list}
                setList = {setList}
                sort = {sort}
            />
            <Footer/>
        </>
    )
}
