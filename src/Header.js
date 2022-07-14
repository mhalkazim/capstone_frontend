import { Link as ReactLink } from 'react-router-dom';
import React, { useState, useContext} from 'react';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { UserContext } from './UserContext.js';

function Header() {


  const { updateUser, state} = useContext(UserContext);
  const { firstname, lastname, email, phonenumber, address, avatar} = state;


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


  const [anchorEl, setAnchorEl] = React.useState(null);

 
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      {/* <!-- NAVIGATION --> */}
      <nav id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- responsive-nav --> */}
          <div id="responsive-nav">
            {/* <!-- NAV --> */}
            <ul className="main-nav nav navbar-nav">
              <li className="active">
                <ReactLink to="/">Home</ReactLink>
              </li>
              <li>
                <ReactLink to="">
                  <strong>Browse Listings </strong>
                </ReactLink>
              </li>
              <li>
                <ReactLink to="">
                  <strong>List My Item</strong>
                </ReactLink>
              </li>
              <li>
                <ReactLink to=""> Laptops</ReactLink>
              </li>
              <li>
                <ReactLink to="">Smartphones</ReactLink>
              </li>
              <li>
                <ReactLink to="">Cameras</ReactLink>
              </li>
              <li>
                <ReactLink to="">Accessories</ReactLink>
              </li>
            </ul>
            {/* <!-- /NAV --> */}
          </div>
          {/* <!-- /responsive-nav --> */}
          {!localStorage.getItem("jsonwebtoken") && (
          <div className="pull-right">
            <Button to="/login" component={ReactLink} disableRipple={true} sx={primaryStyleButton}>
              Login
            </Button>
            <Button to="/signup" component={ReactLink} disableRipple={true} sx={secondaryStyleButton}>
              Signup
            </Button>
          </div>
          )}

          {localStorage.getItem("jsonwebtoken") && (
          <div className="pull-right">
            <IconButton
                size="large"
                color="inherit"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                { avatar === "undefined" &&
                  <AccountCircle sx={{ fontSize: '35px', color: '#FFFFFF'}} />
                }

                { avatar !== "undefined" &&
                  <Avatar sx={{ width: 35, height: 35}} src={avatar} />
                }
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
                
              >
                {
                    [
                      {
                        'text': 'Profile Page',
                        'path': '/profile-page'
                      },
                        {
                            'text': 'Edit Details',
                            'path': '/edit-users'
                        },

                        {
                            'text': 'Change Password',
                            'path': '/edit-password-users'
                        },
                        
                        {
                            'text': 'Sign out',
                            'path': '/',
                        }
                    ]
                    .map(
                        (obj, index) => (
                            <MenuItem 
                                to={obj.path}
                                component={ReactLink}
                                sx={{ 
                                        fontSize: '17px', 
                                        minWidth: '150px',
                                    }} 
                                onClick= {function(event){
                                  handleClose()
                                  if(obj.text === 'Sign out'){
                                    updateUser(
                                      {
                                        loginStatus: false
                                      }
                                    )
                                  }
                                }}
                            >
                                {obj.text}
                            </MenuItem>

                        )
                    )
                
                }
            </Menu>
          </div>
          )}

        </div>
        {/* <!-- /container --> */}
      </nav>
      {/* <!-- /NAVIGATION --> */}

      {/* <!-- MAIN HEADER --> */}
      <div id="header">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- LOGO --> */}
            <div className="col-md-3">
              <div className="header-logo">
                <a href="#" className="logo">
                  <img src="./img/logo2.png" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- /LOGO --> */}

            {/* <!-- SEARCH BAR --> */}
            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value="0">All Categories</option>
                    <option value="1">Category 01</option>
                    <option value="1">Category 02</option>
                  </select>
                  <input className="input" placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>
            {/* <!-- /SEARCH BAR --> */}
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      {/* <!-- /MAIN HEADER --> */}
    </header>
    // <!-- /HEADER -->
  );
}
export default Header;