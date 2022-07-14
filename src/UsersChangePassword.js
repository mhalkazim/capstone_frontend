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

export default function UsersChangePassword() {


    /*
  * ------------------------------------------------------------------------------------
  * Start of Login Procedures
  * ------------------------------------------------------------------------------------
  */

  const [state, setState] = useState("initial");
  let [errorState, setErrorState] = useState([]);
 

  // Declare undefined variables for later assignment (ref props)
  let emailField;
  let oldpasswordField;
  let newpasswordField;
  let confirmpasswordField;


  // To instantiate a FormData object
  const formData = new FormData();

  function changePassword() {

    // Validate the input
    const errors = [];
    emailField = localStorage.getItem("email");

    if(oldpasswordField.value.length === 0) {
        errors.push("Please enter a valid old password");
    }
    if(newpasswordField.value.length === 0) {
        errors.push("Please enter a valid new password");
    }
    if(confirmpasswordField.value.length === 0) {
        errors.push("Please confirm your password");
    }

    // If input is invalid
    if(errors.length > 0) {
        // show error
        setState("unvalid");
        setErrorState(errors);
    }
    else if(confirmpasswordField.value !== newpasswordField.value)
    {
        setState("mismatch");
    }
    // Else,
    else {
        setState("sending");
        setErrorState([]);
        
        formData.append('email', emailField)
        formData.append('oldpassword', oldpasswordField.value)
        formData.append('newpassword', newpasswordField.value);

        // fetch (POST)
        fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/user/changepassword`, {
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
                setState("successful");
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

  if(!localStorage.getItem("email"))
  {
    return(
        <Redirect to ="/" />
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
            Change Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        oldpasswordField = htmlElement
                    }
                  } 
                  required
                  fullWidth
                  name="oldpassword"
                  label="Old Password"
                  type="password"
                  id="oldpassword"
                  autoComplete="old-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        newpasswordField = htmlElement
                    }
                  } 
                  required
                  fullWidth
                  name="password"
                  label="New password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        confirmpasswordField = htmlElement
                    }
                  } 
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Retype new password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>

            { state !== "sending" && state !== "successful" &&
                <Button
              onClick={changePassword}
              style={{fontWeight: '700'}}
              color="primary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save New Password
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
                state === "unvalid" &&
                <Box>

                    <ul>
                        {
                            errorState.map(
                                (error) => {
                                    return <Alert severity="error">{error}</Alert>
                                }
                            )
                        }
                    </ul>

                </Box>
            }   

            {
              state === "unsuccessful" &&
              <Alert severity="error">Internal error. Please try agian later</Alert>
            }

            {  
              state === "successful" &&
              <Alert severity="success">You have signed up successfuly</Alert>
            }

            {  
              state === "mismatch" &&
              <Alert severity="error">Passwords aren't matching, please try again</Alert>
            }

          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
}