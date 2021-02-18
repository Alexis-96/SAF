import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    height: '70px',
    marginTop: '2%',
    backgroundColor: '#29343E',
    left:'0',
    position:'sticky',
    bottom:'0',
    width:'100%',
    borderTop: '1px solid #E7E7E7'
  },
  img:{
    
  }   
}));


export default function Footer() {

  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <img src="/assets/img/footerFinanzas.png"/>
        </Container>
      </footer>
    </div>
  );
}