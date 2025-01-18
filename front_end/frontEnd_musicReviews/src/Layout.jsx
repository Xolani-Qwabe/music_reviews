import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import logo from './assets/logoNoText.png';
import { Divider } from '@mui/material';

import DrawerComponent from './components/DrawerComponent';

function Layout() {
  return (
    <div >
      <Navigation logo={logo} />
      <DrawerComponent/>
    
      <main style={{ 
        top:'8vh',
        padding: '20px',
        position: 'relative',
        // borderLeft: '1px solid black',
        // borderRight: '1px solid black',
        maxWidth: '75%',
        minHeight: '100vh',
        margin: '0 auto',
        // overflow: 'none',
        }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
