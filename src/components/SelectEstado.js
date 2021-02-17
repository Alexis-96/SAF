import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const SelectEstado = ( { useStyles, value } ) => {

    const classes = useStyles();
    const [age, setAge] = React.useState(value);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="" disabled>
                    Seleccionar
          </MenuItem>
                <MenuItem value= "pendiente">Pendiente</MenuItem>
                <MenuItem value="finalizado">Finalizado</MenuItem>
                <MenuItem value= "cancelado">Cancelado</MenuItem>
            </Select>
        </FormControl>
    )
}
