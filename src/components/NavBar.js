import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  appBar: {
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    backgroundColor: '#0554F2',
    opacity: 1,
    height: '70px',
    width: '100%',
    
  },
  logo: {
    marginRight: theme.spacing(3),
    marginLeft: '7%',
  },
  title: {
    flexGrow: 1,
    fontSize: '34px',
    fontFamily : 'normal normal medium 28px/34px Roboto',

  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className = {classes.appBar}>
        <Toolbar>
          <img src="/assets/img/iconBanner.png" alt='logo' className={classes.logo} />
          <Typography variant="h5" className={classes.title}>
            Bandeja de Gestión
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}