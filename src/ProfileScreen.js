import React, { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
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
import { UserContext } from './UserContext.js';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    fontWeight: 600,
    fontSize: 17,
    fontFamily: 'Montserra'
  }));

function ProfileScreen() {

    // Subscribe to the Provider
    const { state }  = useContext(UserContext);
    const { firstname, lastname, email, phonenumber, address, avatar} = state;

    if (!state.loginStatus) {
        return (
            <Redirect to='/login' />
        )
    }   
    else {
        return (
            <ThemeProvider theme={theme}>
        <CssBaseline />
            
          { avatar === "undefined" &&
            <center><AccountCircle sx={{ fontSize: 120, color: 'black'}} /></center>
          }

          { avatar !== "undefined"  &&
            <center><Avatar sx={{ width: 120, height: 120, mb: 3, mt: 2}} src={avatar} /></center>
          }

        <center><Box sx={{ width: 700 }}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Item>First Name:</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>{firstname}</Item>
                </Grid>
                <br></br>
                <Grid item xs={6}>
                    <Item>Last Name:</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>{lastname}</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Email:</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>{email}</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Phone Number:</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>{phonenumber}</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>Address:</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>{address}</Item>
                </Grid>
            </Grid>
        </Box></center>

          
          
    </ThemeProvider>
        )
    }

}

export default ProfileScreen;