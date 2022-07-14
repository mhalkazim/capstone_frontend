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

export default function ProductRegistrationScreen() {

    /*
  * ------------------------------------------------------------------------------------
  * Start of Signup Procedures
  * ------------------------------------------------------------------------------------
  */

  const [state, setState] = useState("initial");
  let [errorState, setErrorState] = useState([]);
//   const { updateUser } = useContext(UserContext);

  // Declare undefined variables for later assignment (ref props)
  let nameField;
  let categoryField;
  let descriptionField;
  let priceField;

  

  // To instantiate a FormData object
  const formData = new FormData();


  function register() {

    // Validate the input
    const errors = [];

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

        formData.append('name', nameField.value);
        formData.append('category', categoryField.value);
        formData.append('description', descriptionField.value);
        formData.append('price', priceField.value);
        

        // fetch (POST)
        fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/product/list`, 
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
            else if(theJson.message === "Product name is unavaliable"){
                setState("notunique");
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
      product: data.get('product'),
      description: data.get('description'),
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <center><Typography variant="h3" component="h1">Register Product</Typography></center>
            <TextField
            inputRef={ 
                function(htmlElement){
                    nameField = htmlElement
                }
              } 
              margin="normal"
              required
              fullWidth
              id="name"
              label="Product Name"
              name="name"
              autoComplete="name"
            />
            <TextField
            inputRef={ 
                function(htmlElement){
                    descriptionField = htmlElement
                }
              } 
              margin="normal"
              required
              fullWidth
              id="description"
              label="Product Description"
              name="description"
              autoComplete="description"
            />
            <TextField
            inputRef={ 
                function(htmlElement){
                    priceField = htmlElement
                }
              } 
              margin="normal"
              required
              fullWidth
              id="price"
              label="Price"
              name="price"
              autoComplete="price"
            />   
            <TextField
            inputRef={ 
                function(htmlElement){
                    categoryField = htmlElement
                }
              } 
            margin="normal"
            required
            fullWidth
            id="category"
            label="Category"
            name="category"
            autoComplete="category"
          />

            { state !== "sending" && state !== "successful" &&
                <Button
                onClick={register}
              type="submit"
              style={{fontWeight: '700'}}
                color="primary"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register Product
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
              <Alert severity="success">You have listed your product successfuly</Alert>
            }
            {  
              state === "notunique" &&
              <Alert severity="error">The product name is not unique, please enter another name</Alert>
            }

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Product Listing
                </Link>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
}