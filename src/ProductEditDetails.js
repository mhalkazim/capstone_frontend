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

export default function ProductEditDetails() {


  /*
  * ------------------------------------------------------------------------------------
  * Start of Signup Procedures
  * ------------------------------------------------------------------------------------
  */

  const [state, setState] = useState("initial");
  let [errorState, setErrorState] = useState([]);
//   const { updateUser } = useContext(UserContext);

  // Declare undefined variables for later assignment (ref props)
  let oldnameField;
  let nameField;
  let categoryField;
  let descriptionField;
  let priceField;

  

  // To instantiate a FormData object
  const formData = new FormData();


  function edit() {

    // Validate the input
    const errors = [];
    if(oldnameField.value.length === 0) {
      errors.push("Please enter a valid old product name");
    }
    if(nameField.value.length === 0) {
        errors.push("Please enter a valid product name");
    }

    if(categoryField.value.length === 0) {
        errors.push("Please enter a valid category name");
    }

    if(descriptionField.value.length === 0) {
        errors.push("Please enter a valid description");
    }
    if(priceField.value.length === 0) {
        errors.push("Please enter a valid price");
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

        formData.append('oldname', oldnameField.value);
        formData.append('name', nameField.value);
        formData.append('category', categoryField.value);
        formData.append('description', descriptionField.value);
        formData.append('price', priceField.value);
        

        // fetch (POST)
        fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/product/update`, 
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
            Edit Product Details
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputRef={ 
                  function(htmlElement){
                      oldnameField = htmlElement
                  }
                } 
                  name="oldname"
                  fullWidth
                  id="oldname"
                  label="Old Product Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                inputRef={ 
                  function(htmlElement){
                      nameField = htmlElement
                  }
                } 
                  name="name"
                  fullWidth
                  id="name"
                  label="Product Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                inputRef={ 
                  function(htmlElement){
                      descriptionField = htmlElement
                  }
                } 
                  fullWidth
                  id="description"
                  label="Product Description"
                  name="description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                inputRef={ 
                  function(htmlElement){
                      priceField = htmlElement
                  }
                } 
                  fullWidth
                  name="price"
                  label="Price"
                  id="price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                inputRef={ 
                  function(htmlElement){
                      categoryField = htmlElement
                  }
                } 
                  fullWidth
                  name="category"
                  label="Category"
                  id="category"
                />
              </Grid>
            </Grid>
            { state !== "sending" && state !== "successful" &&
              <Button
              onClick={edit}
              style={{fontWeight: '700'}}
              color="primary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save Details
            </Button>}

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
              <Alert severity="success">You have listed your product successfuly</Alert>
            }


          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
}