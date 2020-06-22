import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Txtgantisandi from '../components/txtgantisandi';
import Txtselamatdatang from '../components/txtselamatdatang';
import Txtdeskripsi from '../components/txtdeskripsi';

function Copyright() {
  return (
    <Typography color="textPrimary" variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        MII
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    // backgroundColor: '#008F4C',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${"/assets/img/bg11.jpg"})`
  },
  paper: {
    margin: theme.spacing(2, 2),
    marginTop: theme.spacing(15),
    padding: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    width: '50ch',
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
    backgroundColor: '#008F4C',
    borderRadius: 15,
  },
  daftar: {
    margin: theme.spacing(1, 0, 1),
    backgroundColor: '#000603',
    borderRadius: 15,
  },
  TxtField: {
    background: '#d0d3d1',
    
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.image}>
        <Txtselamatdatang />
        <Txtdeskripsi />
      </Grid>
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper} style={{ padding: 70 }}>
          <style jsx>{`
            .txtfield {
              border-radius: 50;
            }
            }
          `}</style>
          <Txtgantisandi />
          <p>Silahkan ganti kata sandi anda.</p>
          <form className={classes.form} noValidate>
            <div className="txtfield">
              <TextField
                className={classes.TxtField}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                id="txtKatasandilama"
                label="Kata sandi lama."
                name="Kata sandi lama"
                type="password"
                autoFocus
              />
              <TextField
                className={classes.TxtField}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                name="Kata sandi baru"
                label="Kata sandi baru."
                type="password"
                id="txtKatasandibaru"
              />
              <TextField
                className={classes.TxtField}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                name="Konfirmasi kata sandi baru"
                label="Konfirmasi kata sandi baru."
                type="password"
                id="txtKonfirmasi"
                autoComplete="current-password"
              />
            </div>
            <div className="submit">
              <Button
                type="submit"
                id="btnLogin"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                GANTI KATA SANDI
              </Button>
            </div>
          </form>
            
          <form className={classes.form} noValidate>
              <Copyright />
          </form>
        </div>
      </Grid>
    </Grid>
  );
}