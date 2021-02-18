import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import { SelectEstado } from './SelectEstado';


export default function Tabla ({useStyles, rows, columns}) {
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
        <Paper style={{width: "100%", margin: "auto"}} /*className={classes.root}*/>
            <TableContainer style={{width: "85%", margin: "auto"}} /*className={classes.container}*/>
                <Table style={{marginTop: "5%"}} stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow >
                            {columns.map((column, index) => (
                                <TableCell
                                    className = { classes.table }
                                    key={column.id}
                                    id={index}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, borderTopLeftRadius: index === 0 && 10, borderTopRightRadius: index === columns.length-1 && 10, backgroundColor: index === 0 ? "#0554F2" : "#CFCFCF4D", color: index === 0 ? "white" : "#313131", fontSize: 14, fontWeight: 'bold', borderRightWidth: index === 0 && 7, borderRightColor: index === 0 && 'white', borderRightStyle: index === 0 && 'solid'}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, indexRow) => {

                            const idDetalle  = row.numero;

                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column, index) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}  style={{ minWidth: column.minWidth, color: index === 0 && "#313131", fontWeight: index === 0 && "bold"}}
                                            >
                                                
                                                {column.id === 'detalle' 
                                                    ? 
                                                    <Link to ={`./detalle/${ idDetalle }`}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </Link>
                                                    : 
                                                    column.id === 'estado'
                                                    ?
                                                    indexRow === 2 ||  indexRow === 5 ||  indexRow === 7 ? <img src="/enProceso.png" />  : indexRow === 0 ||  indexRow === 4 ||  indexRow === 8 ? <img src="/Cancelado.png" /> : <img src="/Finalizado.png" />
                                                   
                                                    :
                                                    column.format && typeof value === 'number' ? column.format(value) : value
                                                }
                                                
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
                style={{margin: "auto", width: "85%"}}
            />
        </Paper>
    );
}