import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
    MenuItem,
    Typography,
    IconButton
} from "@material-ui/core";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { useHistory } from 'react-router-dom';
import '../styles/tabla.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PanToolIcon from '@material-ui/icons/PanTool';
import DoneSharpIcon from '@material-ui/icons/DoneSharp';
import CachedSharpIcon from '@material-ui/icons/CachedSharp';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';

export default function Tabla({ useStyles,columns,list,setList,sort }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const history = useHistory();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const ordenar = (param) => {
        let newSortedList = sort(param)
        if (newSortedList[0] === list[0]) newSortedList = sort(param, true)
        setList(newSortedList)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const verDetalles = (idDetalle) => {
        console.log("ID DETALLE", idDetalle)
        history.push(
            {
                pathname: '/detalle/' + idDetalle
            }
        )
    }
    const setTomar = (e)=>{
        console.log(e)
        e.tomar = 'si'
        console.log(e)
        
    }

    return (
        <Paper style={{ width: "85%", margin: "auto", marginBottom: "5%", marginTop: "2%" }} /*className={classes.root}*/>
            <TableContainer style={{ width: "100%", margin: "auto" }} /*className={classes.container}*/>
                <Table /*style={{ marginTop: "1%" }}*/ stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow >
                            {columns.map((column, index) => (

                                <TableCell
                                    onClick={() => ordenar(column.id)}
                                    className={classes.table}
                                    key={column.id}
                                    id={index}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, borderTopLeftRadius: index === 0 && 10, borderTopRightRadius: index === columns.length - 1 && 10, backgroundColor: index === 0 ? "#004d9a" : "#CFCFCF4D", color: index === 0 ? "white" : "#313131", fontSize: 14, fontWeight: 'bold', borderRightWidth: index === 0 && 7, borderRightColor: index === 0 && 'white', borderRightStyle: index === 0 && 'solid' }}
                                >
                                    {column.label}
                                </TableCell>

                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, indexRow) => {
                            const idDetalle = row.id;
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column, index) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, maxWidth: column.maxWidth, color: index === 0 && "#313131", fontWeight: index === 0 && "bold" }}
                                            >    
                                                {
                                                    column.id === 'actions'
                                                    ?

                                                    <>{row.tomar === 'no'
                                                        ?
                                                        <IconButton 
                                                            aria-label="tomar"
                                                           
                                                        >
                                                            <PanToolIcon
                                                                color='primary'
                                                                
                                                            />
                                                        </IconButton>
                                                        :
                                                        <IconButton aria-label="tomar"
                                                         onClick = {() => setTomar(row)}>

                                                            <PanToolOutlinedIcon
                                                                color='primary'
                                                            />
                                                        </IconButton>
                                                        }

                                                        <IconButton aria-label="ver" onClick={() => verDetalles(idDetalle)}>
                                                            <VisibilityIcon
                                                                color='primary'
                                                            />
                                                        </IconButton>
                                                        <Tooltip
                                                            position="left"
                                                            theme="light"
                                                            style={{ height: 500 }}
                                                            html={<div style={{ pointerEvents: "auto" }}>
                                                                <MenuItem /*onClick={funcTooltipRecla}*/>
                                                                    <Typography variant="inherit">
                                                                        Ver FID
                                                                </Typography>
                                                                </MenuItem>
                                                                <MenuItem /*onClick={funcTooltipRecla}*/>
                                                                    <Typography variant="inherit">
                                                                        Ver REQ
                                                                </Typography>
                                                                </MenuItem>
                                                                <MenuItem /*onClick={funcTooltipRecla}*/>
                                                                    <Typography variant="inherit">
                                                                        Ver eDOC
                                                                </Typography>
                                                                </MenuItem>
                                                                <MenuItem /*onClick={funcTooltipRecla}*/>
                                                                    <Typography variant="inherit">
                                                                        Ver eEXP
                                                                </Typography>
                                                                </MenuItem>
                                                            </div>}
                                                            trigger="click">
                                                            <IconButton iconstyle={{ width: 24, height: 24 }}
                                                                style={{
                                                                    padding: 0,
                                                                    width: 30,
                                                                    height: 30
                                                                }}>
                                                                <MoreVertIcon />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </>
                                                    :
                                                    column.id === 'estado' && value === 'finalizado'
                                                        ?
                                                        <>
                                                            <DoneSharpIcon
                                                                color='primary'
                                                            />
                                                            <Typography variant="inherit" >
                                                                FINALIZADO
                                                            </Typography>
                                                        </>
                                                        :
                                                        column.id === 'estado' && value === 'pendiente'
                                                        ?
                                                        <>
                                                            <CachedSharpIcon
                                                                color='primary'
                                                            />
                                                            <Typography variant="inherit" >
                                                                PENDIENTE
                                                            </Typography>
                                                        </>
                                                        :
                                                        column.id === 'estado' && value === 'cancelado'
                                                        ?
                                                        <>
                                                            <CloseSharpIcon
                                                                color='primary'
                                                            />
                                                            <Typography variant="inherit" >
                                                                CANCELADO
                                                            </Typography>
                                                        </>
                                                        :
                                                        column.format && typeof value === 'number' ? column.format(value) : value
                                                }
                                                {/* column.id === 'estado'
                                                        ?
                                                        indexRow === 2 || indexRow === 5 || indexRow === 7 ? <img src="/enProceso.png" /> : indexRow === 0 || indexRow === 4 || indexRow === 8 ? <img src="/Cancelado.png" /> : <img src="/Finalizado.png" />

                                                        : */}

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
                count={list.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                style={{ margin: "auto", width: "85%" }}
            />
        </Paper>
    );
}