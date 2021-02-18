import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: '40px',
    marginTop: '2%',
    backgroundColor: '#29343E',
  },
  img:{}   
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