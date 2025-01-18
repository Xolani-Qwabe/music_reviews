import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import { NavLink, Link } from 'react-router-dom';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider, InputBase
} from '@mui/material';
import {
  ReviewsOutlined,
  StorefrontOutlined,
  InfoOutlined,
  HelpOutline,
  PersonAddOutlined,
  DehazeRounded,
  HelpCenterOutlined,
  SearchRounded
} from '@mui/icons-material';

import './Navigation.css';

function Navigation({ logo }) {
  const navLinks = [
    {
      path: "/reviews",
      label: "Reviews",
      icon: <ReviewsOutlined />,
    },
    {
      path: "/nftstore",
      label: "NFT Store",
      icon: <StorefrontOutlined />,
    },
    {
      path: "/about",
      label: "About",
      icon: <InfoOutlined />,
    },
    {
      path: "/howItWorks",
      label: "How It Works",
      icon: <HelpOutline />,
    },
    {
      path: "/register",
      label: "Register",
      icon: <PersonAddOutlined />,
    },
    {
      path: "/help",
      label: "Help",
      icon: <HelpCenterOutlined />,
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius:'50px',
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    // height:'70%',
    alignSelf:'center',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(2, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      height: '100%',
      alignSelf:'center',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  return (
    <nav className="nav-container" aria-label="Main Navigation">
      <div className="nav-content">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={logo} alt="App logo" />
        </Link>
      </div>

      <Search sx={{}}>
            <SearchIconWrapper sx={{alignSelf:'center'}}>
              <SearchRounded sx={{alignSelf:'center'}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        </Search>

      <div className="sub">
      <IconButton
        aria-label="menu"
        className="menu-icon"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <DehazeRounded />
      </IconButton>
      <Menu
        id="basic-menu"
     
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {navLinks.map(({ path, label, icon }, index) => (
          <React.Fragment key={path}>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to={path}
              // sx={{color:"white", backgroundColor:"black"}}
              // className={({ isActive }) =>
              //   isActive ? 'active-menu-item' : ''
              // }
            >
              <ListItemIcon >{icon}</ListItemIcon>
              <ListItemText>{label}</ListItemText>
            </MenuItem>
            {index < navLinks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Menu>
      <div><Link className='login' to={'/login'} label="Login">Login</Link></div>
      </div>
     
      </div>
        
    </nav>
  );
}

export default Navigation;
