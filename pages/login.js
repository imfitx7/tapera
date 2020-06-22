import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Txtlogin from '../components/txtlogin';
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
    margin: theme.spacing(8, 4),
    marginTop: theme.spacing(20),
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
    borderRadius: 12,
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
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> */}
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper} style={{ padding: 100 }}>
          <Txtlogin />
          <form className={classes.form} noValidate>
              {/* <input 
                className={classes.TxtField}
                type="text" 
                fullWidth
                autoComplete="email"
                placeholder="User ID"  
                className="form-control"
              /> */}
              <TextField
                // className={classes.TxtField}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                id="txtUserID"
                label="User ID"
                name="User ID"
                autoComplete="email"
                autoFocus
              />
              <TextField
                // className={classes.TxtField}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                name="Password"
                label="Kata Sandi"
                type="password"
                id="txtPassword"
                autoComplete="current-password"
              />
            <Grid container>
              <Grid item xs>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Simpan User ID"
                id="lblSimpanId"
                />
              </Grid>
              <Grid item>
                <Link href="#" color="textPrimary" id="lupakatasandi"> 
                  Lupa Kata Sandi?
                </Link>
              </Grid>
            </Grid>
            <div className="submit">
              <Button
                type="submit"
                id="btnLogin"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                LOGIN
              </Button>
            </div>
          </form>
            <Typography component="h5">
              Atau
            </Typography>
          <form className={classes.form} noValidate>
            <Button
              type="submit"
              id="btnDaftar"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.daftar}>
              DAFTAR
            </Button>
              <Copyright />
          </form>
        </div>
      </Grid>
    </Grid>
  );
}