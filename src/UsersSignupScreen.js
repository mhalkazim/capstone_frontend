import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Alert from '@mui/material/Alert';
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

export default function UsersSignupScreen() {

     /*
  * ------------------------------------------------------------------------------------
  * Start of Signup Procedures
  * ------------------------------------------------------------------------------------
  */

  const [state, setState] = useState("initial");
  let [errorState, setErrorState] = useState([]);
//   const { updateUser } = useContext(UserContext);

  // Declare undefined variables for later assignment (ref props)
  let emailField;
  let passwordField;
  let firstnameField;
  let lastnameField;
  let phonenumberField;
  let addressField;
  let avatarField;
  let confirmPasswordField;
  

  // To instantiate a FormData object
  const formData = new FormData();

  const attachFile = (evt) => {
    // Create an array from the file attachments
    const files = Array.from(evt.target.files);

    // For each attachment, append the file to formData
    files.forEach(
        (fileAttachment, index) => {
            console.log('hre')
            formData.append(index, fileAttachment);
        }
    );
  }

  function signup() {

    // Validate the input
    const errors = [];

    if(firstnameField.value.length === 0) {
        errors.push("Please enter a valid first name");
    }

    if(lastnameField.value.length === 0) {
        errors.push("Please enter a valid last name");
    }

    if(emailField.value.length === 0) {
        errors.push("Please enter a valid email address");
    }
    if(passwordField.value.length === 0) {
        errors.push("Please enter a valid password");
    }

    if(passwordField.value !== confirmPasswordField.value){
        errors.push("Passwords aren't matching, please try again.");
    }

    if(phonenumberField.value.length === 0) {
        errors.push("Please enter a valid phone number");
    }
    if(addressField.value.length === 0) {
        errors.push("Please enter a valid address");
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
        formData.append('firstname', firstnameField.value);
        formData.append('lastname', lastnameField.value);
        formData.append('phonenumber', phonenumberField.value);
        formData.append('address', addressField.value);

        // fetch (POST)
        fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/user/registration`, 
        {
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

            if(theJson.status === "ok") {
                // updateUser(
                //     {
                //         jsonwebtoken: theJson.message.jsonwebtoken,
                //         firstname: theJson.message.firstname,
                //         lastname: theJson.message.lastname,
                //         email: theJson.message.email,
                //         avatar: theJson.message.avatar,
                //         loggedIn: true
                //     }
                // )
                setState("successful");
            }
            else if(theJson.message === "Account already exists"){
                setState("accountexist")
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
  * End of Signup Procedures
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        firstnameField = htmlElement
                    }
                  } 
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        lastnameField = htmlElement
                    }
                  } 
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        emailField = htmlElement
                    }
                  } 
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        passwordField = htmlElement
                    }
                  } 
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        confirmPasswordField = htmlElement
                    }
                  } 
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Retype Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        phonenumberField = htmlElement
                    }
                  } 
                  required
                  fullWidth
                  name="phonenumber"
                  label="Phone Number"
                  id="phonenumber"
                  autoComplete="phonenumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={ 
                    function(htmlElement){
                        addressField = htmlElement
                    }
                  } 
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="address"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                    <center>
                        <Typography 
                        component="h1" 
                        variant="h6" 
                        noWrap
                        >
                           Upload a profile picture
                        </Typography>
                    </center>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                    variant="contained"
                    component="label"
                    >
                    <input ref={(element)=>{ avatarField = element}} 
                    onChange={attachFile}
                    onClick={(evt)=> { 
                    evt.target.value = null
                    }}
                    id="photo" name="file" 
                    type="file" multiple="multiple"/>
                </Button>
              </Grid>   

              
            </Grid>

            { state !== "sending" && state !== "successful" &&
                <Button
                onClick={signup}
                style={{fontWeight: '700'}}
                color="primary"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign Up
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
                state === "accountexist" &&
                <Alert severity="error">Email is already used, please choose a new email.</Alert>
            }

            <Grid container justifyContent="flex-end">
              <Grid item>
                <ReactLink to="/login" variant="body2" color="secondary">
                  Already have an account? Sign in
                </ReactLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
  
}
}