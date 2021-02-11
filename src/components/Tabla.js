import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

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

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow >
                            {columns.map((column) => (
                                <TableCell
                                    className = { classes.table }
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}