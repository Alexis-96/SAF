
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(4),
        minWidth: 200,
        marginTop: 50,
        marginLeft:'40%'
    },
    selectEmpty: {
        marginTop: theme.spacing(5),
    },
}));


const FiltroTablaHome = ({rows, setList}) => {
    const classes = useStyles();
    const [filtro, setFiltro] = useState('');

    const handleChange = (event) => {
        setFiltro(event.target.value);
        filtrar(event.target.value);
    };


    const filtrar = (estado) =>{
        if(estado === 'todos') {
            setList(rows); 
        }
        else{
            const arrayFiltrado = rows.filter(fila => fila.estado === estado)
            setList(arrayFiltrado);
        }
    }
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="label-filtro">Filtrar</InputLabel>
                <Select
                    labelId="label-filtro"
                    id="filtro"
                    value={filtro}
                    onChange={handleChange}
                >   <MenuItem value='todos'>Todos</MenuItem>
                    <MenuItem value='pendiente'>Pendiente</MenuItem>
                    <MenuItem value='cancelado'>Cancelado</MenuItem>
                    <MenuItem value='finalizado'>Finalizado</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default FiltroTablaHome
