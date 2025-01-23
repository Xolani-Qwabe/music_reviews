import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import logo from './assets/logoNoText.png';

import DrawerComponent from './components/DrawerComponent';
import RightDrawer from './components/RightDrawer';

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Temporary login state

  return (
    <div>
      <Navigation logo={logo} />
      {isLoggedIn && <DrawerComponent />} {/* Show left drawer only if logged in */}
      <main
        style={{
          top: '12vh',
          padding: '0 0',
          position: 'relative',
          minHeight: '88vh',
          margin: '0 auto',
          width: isLoggedIn ? '70vw' : '100vw', // Full width if not logged in
        }}
      >
        <Outlet />
      </main>
      {isLoggedIn && <RightDrawer />} {/* Show right drawer only if logged in */}
    </div>
  );
}

export default Layout;
