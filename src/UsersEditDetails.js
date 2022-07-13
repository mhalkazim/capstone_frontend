import React, { useState, useContext}from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as ReactLink } from 'react-router-dom';
import { UserContext } from './UserContext.js';
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

export default function UsersEditDetails() {



     /*
  * ------------------------------------------------------------------------------------
  * Start of Login Procedures
  * ------------------------------------------------------------------------------------
  */

     const [state, setState] = useState("initial");
     let [errorState, setErrorState] = useState([]);
     const { updateUser } = useContext(UserContext);
   //   const { updateUser } = useContext(UserContext);
   
     // Declare undefined variables for later assignment (ref props)
     let emailField
     let firstnameField;
     let lastnameField;
     let phonenumberField;
     let addressField;
    
     
   
     // To instantiate a FormData object
     const formData = new FormData();
   
     function editDetails() {

      emailField = localStorage.getItem("email");

       // Validate the input
       const errors = [];
   
       if(firstnameField.value.length === 0) {
          firstnameField.value = localStorage.getItem('firstname')
          errors.push("Please enter a valid first name");
       }
       if(lastnameField.value.length === 0) {
          lastnameField.value = localStorage.getItem('lastname')
          errors.push("Please enter a valid last name");
       }

       if(phonenumberField.value.length === 0) {
          phonenumberField.value = localStorage.getItem('phonenumber')
          errors.push("Please enter a valid phone number");
       }
       if(addressField.value.length === 0) {
          addressField.value = localStorage.getItem('address')
          errors.push("Please enter a valid address");
       }
   
       // If input is invalid
       if(errors.length === 4) {
           // show error
           setState("unvalid");
           setErrorState(errors);
       }
       // Else,
       else {
           setState("sending");
           setErrorState([]);

   
           formData.append('email', emailField);
           formData.append('firstname', firstnameField.value);
           formData.append('lastname', lastnameField.value);
           formData.append('phonenumber', phonenumberField.value);
           formData.append('address', addressField.value);
           
   
           // fetch (POST)
           fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/user/updatedata`, {
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
                           email: localStorage.getItem('email'),
                           firstname: theJson.message.firstname,
                           lastname: theJson.message.lastname,
                           phonenumber: theJson.message.phonenumber,
                           address: theJson.message.address,
                           jsonwebtoken: localStorage.getItem('jsonwebtoken'),
                           avatar: localStorage.getItem('avatar'),
                           loginStatus: true
                       }
                   )
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
        <Redirect to="/" />
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
            Edit Account Details
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
                        phonenumberField = htmlElement
                    }
                  } 
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
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  autoComplete="address"
                />
              </Grid>
            </Grid>

            { state !== "sending" && state !== "successful" &&
              <Button
              onClick={editDetails}
              style={{fontWeight: '700'}}
              color="primary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Details
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
              <Alert severity="success">Your details are saved</Alert>
            }
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
}