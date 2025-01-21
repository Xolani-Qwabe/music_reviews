import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DrawerComponent.css';
import { styled, useTheme, ThemeProvider, createTheme, Box } from '@mui/material';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import {
  MusicVideoRounded,
  ShoppingBagRounded,
  LanRounded,
  StoreRounded,
  ListAltRounded,
  AccountBoxRounded,
  PermMediaRounded,
  DashboardRounded,
} from '@mui/icons-material';

const drawerWidth = '15vw';

function DrawerComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens

  const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
  });

  const iconStyle = { color: 'rgb(157, 241, 232)' };
  const list1 = [
    { label: 'Creators', icon: <MusicVideoRounded sx={iconStyle} />, path: '/creators' },
    { label: 'Buyers', icon: <ShoppingBagRounded sx={iconStyle} />, path: '/buyers' },
    { label: 'Service providers', icon: <LanRounded sx={iconStyle} />, path: '/service-providers' },
    { label: 'Market Place', icon: <StoreRounded sx={iconStyle} />, path: '/market-place' },
  ];

  const list2 = [
    { label: 'Task Board', icon: <ListAltRounded sx={iconStyle} />, path: '/task-board' },
    { label: 'Account', icon: <AccountBoxRounded sx={iconStyle} />, path: '/account' },
    { label: 'Portfolio', icon: <PermMediaRounded sx={iconStyle} />, path: '/portfolio' },
    { label: 'Dashboard', icon: <DashboardRounded sx={iconStyle} />, path: '/dashboard' },
  ];

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <Box>
      <Divider />
      <Box className="music-box" sx={{ml:2,display: { xs: 'none', sm: 'block' }}}>
        <p className="music">
          MUSIC <span className="reviews">REVIEWS</span>
        </p>
      </Box>
      <List className="drawer-list">
        {list1.map((tab, index) => (
          <ListItem className="list-item" key={index} disablePadding>
            <Link className="link" to={tab.path}>
              <ListItemButton className="list-item-button">
                <ListItemIcon className="list-item-icon">{tab.icon}</ListItemIcon>
                {!isMobile && <ListItemText className="list-item-text" primary={tab.label} />}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <List className="drawer-list">
        {list2.map((tab, index) => (
          <ListItem className="list-item" key={index} disablePadding>
            <Link className="link" to={tab.path}>
              <ListItemButton className="list-item-button">
                <ListItemIcon className="list-item-icon">{tab.icon}</ListItemIcon>
                {!isMobile && <ListItemText className="list-item-text" primary={tab.label} />}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: 'rgba(71, 98, 130, 0.2)' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'block', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              top: '12vh',
              borderTopRightRadius: '5px',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </ThemeProvider>
    </Box>
  );
}

export default DrawerComponent;
