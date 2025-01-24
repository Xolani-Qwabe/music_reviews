import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import logo from './assets/logoNoText.png';
import DrawerComponent from './components/DrawerComponent';
import RightDrawer from './components/RightDrawer';

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('http://localhost:3000/profile', {
          withCredentials: true,  // Make sure to send cookies
        });
    
        if (response.status === 200) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          navigate('/login'); // Redirect to login if not logged in
        }
      } catch (error) {
        setIsLoggedIn(false);
        navigate('/login');
      }
    };
    

    checkSession();
  }, [navigate]);

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
