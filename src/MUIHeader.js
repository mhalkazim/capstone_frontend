import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link as ReactLink } from 'react-router-dom';

const pages = ['Browse Listing', 'List My Item', 'Laptop', 'Smartphones', 'Cameras', 'Accessories'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MUIHeader = () => {

    const primaryStyleButton = {
        displayPrint: 'inline-block',
        pt: 1.5,
        pb: 1.5,
        pr: 3.75,
        pl: 3.75,
        backgroundColor: '#D10024',
        border: 'none',
        borderRadius: 40,
        color: '#FFF',
        textTransform: 'uppercase',
        fontWeight: 700,
        textAlign: 'center',
        webkitTransition: '0.2s all',
        transition: '0.2s all',
        mt: 0.875,
        mb: 0.875,
        ml: 0.625,
        mr: 0.625,
        fontSize: 13,
      }
    
      const secondaryStyleButton = {
        displayPrint: 'inline-block',
        pt: 1.5,
        pb: 1.5,
        pr: 3.75,
        pl: 3.75,
        backgroundColor: '#dcdcdc',
        border: 'none',
        borderRadius: 40,
        color: '#15161D',
        textTransform: 'uppercase',
        fontWeight: 700,
        textAlign: 'center',
        webkitTransition: '0.2s all',
        transition: '0.2s all',
        mt: 0.875,
        mb: 0.875,
        ml: 0.625,
        mr: 0.625,
        fontSize: 13,
      }


      const primaryStyleList = {
        color: '#D10024',
        backgroundColor: 'transparent',
        webkitTransform: 'translateX(0%)',
        msTransform: 'translateX(0%)',
        transform: 'translateX(0%)',
        width: '100%',
      }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            to="/"
            component={ReactLink}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: '#D10024',
              textDecoration: 'none',
              fontSize: 17,
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Home
          </Typography>

          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                    my: 2, color: 'white', 
                    display: 'block',
                    fontWeight: '400',
                    fontSize: 17,
                    fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ justifyContent : 'flex-end'}}>
                <Button to="/login" component={ReactLink} disableRipple={true} sx={primaryStyleButton}>
                    Login
                </Button>
                <Button to="/signup" component={ReactLink} disableRipple={true} sx={secondaryStyleButton}>
                    Signup
                </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MUIHeader;
