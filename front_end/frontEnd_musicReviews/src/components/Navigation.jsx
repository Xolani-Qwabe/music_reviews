// Navigation.jsx
import{useState, React}from 'react';
import { styled, alpha } from '@mui/material/styles';
import { NavLink, Link } from 'react-router-dom';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  InputBase,
  Button,
} from '@mui/material';
import {
  ReviewsOutlined,
  StorefrontOutlined,
  InfoOutlined,
  HelpOutline,
  PersonAddOutlined,
  HelpCenterOutlined,
  SearchRounded,
  MoreHorizRounded,
} from '@mui/icons-material';
import './Navigation.css';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../authSlice';
import { logoutUser } from '../api';

function Navigation({ logo }) {
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navLinks = [
    {
      path: '/reviews',
      label: 'Reviews',
      icon: <ReviewsOutlined />,
    },
    {
      path: '/nftstore',
      label: 'NFT Store',
      icon: <StorefrontOutlined />,
    },
    {
      path: '/about',
      label: 'About',
      icon: <InfoOutlined />,
    },
    {
      path: '/howItWorks',
      label: 'How It Works',
      icon: <HelpOutline />,
    },
    {
      path: '/register',
      label: 'Register',
      icon: <PersonAddOutlined />,
    },
    {
      path: '/help',
      label: 'Help',
      icon: <HelpCenterOutlined />,
    },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null); // Initialize anchorEl with useState
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(setIsLoggedIn(false)); // Update Redux state
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

 
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px',
    backgroundColor:'transparent',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    alignSelf: 'center',
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
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      alignSelf: 'center',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (
    <nav className="nav-container" aria-label="Main Navigation">
      <div className="logo-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to="/">
          <img className="logo" src={logo} alt="App logo" />
        </Link>
      </div>
      <div className="nav-content">
        <Search>
          <SearchIconWrapper>
            <SearchRounded sx={{ color: 'rgb(157, 241, 232)' }} />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </Search>

        <div className="sub">
          <IconButton
            aria-label="menu"
            className="menu-icon"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHorizRounded sx={{ color: 'rgb(157, 241, 232)', width: '6vw', height: '6vh' }} />
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
              <div key={path}>
                <MenuItem onClick={handleClose} component={NavLink} to={path}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{label}</ListItemText>
                </MenuItem>
                {index < navLinks.length - 1 && <Divider />}
              </div>
            ))}
          </Menu>
        </div>
      </div>
      {isLoggedIn ? (
        <Button
          variant="outlined"
          color="rgb(157, 241, 232)"
          sx={{ borderRadius: '50px', pr: 3, pl: 3, mr: 2 }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="rgb(157, 241, 232)"
          sx={{ borderRadius: '50px', pr: 3, pl: 3, mr: 2 }}
        >
          <Link className="login" to="/login" label="Login">
            Login
          </Link>
        </Button>
      )}
    </nav>
  );
}

export default Navigation;
