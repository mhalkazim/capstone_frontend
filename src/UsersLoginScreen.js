import React, { useState, useContext } from 'react';
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
import { Redirect } from 'react-router';
import { UserContext } from './UserContext.js';

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

  const [state, setState] = useState("initial");
  let [errorState, setErrorState] = useState([]);
  const { updateUser } = useContext(UserContext);

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
        setState("unvalid");
        setErrorState(errors);
    }
    // Else,
    else {
        setState("sending");
        setErrorState([]);

        formData.append('email', emailField.value);
        formData.append('password', passwordField.value);

        // fetch (POST)
        fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/user/login`, {
            method: 'POST',
            // headers: {"Content-Type": "application/json"},
            body: formData,
            // headers:{
            //     "Content-Type": "application/form-data"
            // }
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
                updateUser(
                    {
                        jsonwebtoken: theJson.message.jsonwebtoken,
                        firstname: theJson.message.firstname,
                        lastname: theJson.message.lastname,
                        email: theJson.message.email,
                        avatar: theJson.message.avatar,
                        phonenumber: theJson.message.phonenumber,
                        address: theJson.message.address,
                        loginStatus: true
                    }
                )
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

  if(localStorage.getItem("email"))
  {
    return(
        <Redirect to ="/profile-page" />
    )
  }

  if(state==="successful"){
    return(
        <Redirect to="/profile-page" />
    )
  }
  else{
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
              inputRef={ 
                function(htmlElement){
                    emailField = htmlElement
                }
              } 
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
              inputRef={ 
                function(htmlElement){
                    passwordField = htmlElement
                }
              }
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
              <Alert severity="error">Internal error. Please try agian later</Alert>
            }

            {
                state === "unvalid" &&
                <Alert severity="error">Please enter a valid email address or password</Alert>
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
}