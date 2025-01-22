import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import logo from './assets/logoNoText.png';


import DrawerComponent from './components/DrawerComponent';
import RightDrawer from './components/RightDrawer';

function Layout() {
  return (
    <div >
      <Navigation logo={logo} />
      <DrawerComponent style={{}}/>
    
      <main style={{ 
        top:'12vh',
        padding:'0 0',
        position: 'relative',
        // borderLeft: '1px solid black',
        // borderRight: '1px solid black',
        minHeight: '88vh',
        margin: '0 auto',
     
        // overflow: 'none'
        width:'70vw'
        }}>
        <Outlet />
      </main>
      <RightDrawer/>
    </div>
  );
}

export default Layout;
