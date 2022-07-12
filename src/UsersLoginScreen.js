import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as ReactLink } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {''}
      <Link color="inherit" href="https://mui.com/">
        
      </Link>{' '}
    </Typography>
  );
}

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#D10024',
        },
        secondary: {
            main: '#15161D',
        }
    },
    typography: {
        fontSize: 18,
    },
});

export default function UsersLoginScreen() {

    /*
  * ------------------------------------------------------------------------------------
  * Start of Login Procedures
  * ------------------------------------------------------------------------------------
  */

  let [state, setState] = useState("initial");
  let [errorState, setErrorState] = useState([]);

  // Declare undefined variables for later assignment (ref props)
  let emailField;
  let passwordField;

  // To instantiate a FormData object
  const formData = new FormData();

  function login() {

    // Validate the input
    const errors = [];

    if(emailField.value.length === 0) {
        errors.push("Please enter a valid email address");
    }
    if(passwordField.value.length === 0) {
        errors.push("Please enter a valid password");
    }

    // If input is invalid
    if(errors.length > 0) {
        // show error
        setState("validation error");
        setErrorState(errors);
    }
    // Else,
    else {
        setState("sending");
        setErrorState([]);

        formData.append('email', emailField.value);
        formData.append('password', passwordField.value);
        // fetch (POST)
        fetch(`${process.env.REACT_APP_BACKEND}/users/login`, {
            method: 'POST',
            // headers: {"Content-Type": "application/json"},
            body: formData
        })
        // use .json() to convert from string to json
        .then(
            function (backendResponse) {
                return backendResponse.json();
            }
        )
        // store jwt in the browser (user's disk)
        .then((theJson)=>{
            console.log(theJson)

            if(theJson.message.email) {
                // setUserState(
                //     {
                //         jsonwebtoken: theJson.message.jsonwebtoken,
                //         firstName: theJson.message.firstName,
                //         lastName: theJson.message.lastName,
                //         email: theJson.message.email,
                //         avatar: theJson.message.avatar,
                //         loginStatus: true
                //     }
                // )
                setState("successful");
            } 
            else if (theJson.message === "Wrong email or password") {
                setState("validation error");
            } 
            else {
                setState("unsuccessful");
            }
        })
        .catch((error)=>{
            console.log(error);
            setState("unsuccessful");
        });
    }
  }

  /*
  * ------------------------------------------------------------------------------------
  * End of Login Procedures
  * ------------------------------------------------------------------------------------
  */

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              ref={ (elem)=>emailField = elem }
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              ref={ (elem)=>passwordField = elem }
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            { state !== "sending" && state !== "successful" &&
                <Button
                onClick={login}
                style={{fontWeight: '700'}}
                color="primary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
            }

            {
              state === "sending" &&
              <Box my={3}>
                <center>
                  <CircularProgress size={48} />
                </center>
              </Box>
            }

            {
              state === "validation error" &&
              <Alert severity="error">Incorrect username or password</Alert>
            }

            {
              state === "successful" &&
              <Alert severity="success">You have logged in successfuly</Alert>
            }

            {
              state === "unsuccessful" &&
              <Alert severity="error">Internal erro. Please try agian later</Alert>
            }



            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="secondary">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" component={ReactLink} variant="body2" color="secondary">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}