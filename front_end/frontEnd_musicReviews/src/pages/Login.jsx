import React from 'react'
import { Box } from '@mui/material'
import img1 from '../assets/login1.jpg'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginForm from '../components/LoginForm'


function Login() {
  const loginStyles = {
  
  }
  return (
    <Box className='container' p={2}>
      <div className="box1"></div>
      <div className="box2">
        <LoginForm/>
      </div>

    </Box>
  )
}

export default Login