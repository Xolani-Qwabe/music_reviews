import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import logo from './assets/logoNoText.png';

function Layout() {
  return (
    <div >
      <Navigation logo={logo} />
      <main style={{ 
        top:'10vh',
        padding: '20px',
        position: 'relative',
        border: '1px solid #ccc',
        maxWidth: '75%',
        maxHeight: '100vh',
        margin: '0 auto',
        overflow: 'none',
        }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
