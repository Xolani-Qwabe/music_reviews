import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DrawerComponent.css'
import { styled } from '@mui/material';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  ThemeProvider,
  createTheme,
  Box,
 
} from '@mui/material';
import { InboxRounded, 
  MailRounded, 
  StoreRounded, 
  LanRounded, 
  ShoppingBagRounded,
  MusicVideoRounded, 
  ListAltRounded, 
  AccountBoxRounded, 
  PermMediaRounded, 
  DashboardRounded
} from '@mui/icons-material';

const drawerWidth = '12.5vw';

function DrawerComponent() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Hook to detect screen size
  const theme = useTheme();

  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('lg')); 

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

  const iconStyle = {color:' rgb(157, 241, 232)'}
  const list1 = [
    {label:'Creators', icon:<MusicVideoRounded sx={iconStyle}/> ,path:'/creators'},
    {label:'Buyers', icon:<ShoppingBagRounded sx={iconStyle}/>, path:'/buyers'},
    {label:'Service providers', icon:<LanRounded sx={iconStyle}/>, path:'/service-providers' }, 
    {label:'Market Place', icon: <StoreRounded sx={iconStyle}/> ,path:'/market-place'}
  ];

  const list2 = [
    {label:'Task Board' , icon:<ListAltRounded sx={iconStyle}/>, path:'/task-board'}, 
    {label :'Account', icon:<AccountBoxRounded sx={iconStyle}/>, path:'/account'}, 
    {label:'Portfolio', icon:<PermMediaRounded sx={iconStyle}/>, path:'/portfolio'},
    {label:'Dashboard', icon:<DashboardRounded sx={iconStyle}/>, path:'/dashboard'} 
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

  // Drawer content
  const drawer = (
    <Box>
      <Divider />
      <List className='drawer-list' sx={{color:' rgb(157, 241, 232)'}}>
        {list1.map((tab, index) => (
         <ListItem className='list-item' key={index} disablePadding sx={{width:{drawerWidth},mb:2}}>
            <Link className='link' to={tab.path} style={{textDecoration:'none',width:'100%'}}>
              <ListItemButton variant='outlined' className='list-item-button'
                sx={{ py: 0, minHeight: 32, color: ' rgb(157, 241, 232)',width:{drawerWidth} }}
              >
                <ListItemIcon className='list-item-icon' color=' rgb(157, 241, 232)'>
                  {tab.icon}
                </ListItemIcon>
                {!isMediumOrSmaller && <ListItemText className='list-item-text' primary={tab.label} />}
              </ListItemButton>
            </Link>
          </ListItem>
        ))} 
      </List>
      <Divider />
      <List>
      {list2.map((tab, index) => (
         <ListItem key={index}sx={{listStyle:'none' ,width:{drawerWidth} , mb:2}} disablePadding>
            <Link className='link'style={{textDecoration:'none',width:'100%'}} to={tab.path}>
              <ListItemButton 
                 alignItems="flex-start"
                className='list-item-button'
                sx={{width:{drawerWidth}, py: 0, minHeight: 32, color: ' rgb(157, 241, 232)' }}
                >
                <ListItemIcon className='list-item-icon'>
                  {tab.icon}
                </ListItemIcon>
                {!isMediumOrSmaller && <ListItemText className='list-item-text' primary={tab.label} />}
              </ListItemButton>
            </Link>
          </ListItem>
        ))}  
       
      </List>
    </Box>
  );

  return (
    <Box sx={{  bgcolor: 'rgba(71, 98, 130, 0.2)'}}>
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
          keepMounted: true, // Better open performance on mobile.
        }}
    
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
       sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            top: '12vh',
            borderTopRightRadius:'5px',
            
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
