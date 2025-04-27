// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="#6b4b94">
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer', color: 'white' }} onClick={() => navigate('/')}>
          Task Tracker
        </Typography>

        {/* Create Task Button */}
        <Box sx={{ display: 'flex', gap: 2, color: 'white' }}>
  <Button 
    onClick={() => navigate('/create-task')}
    sx={{
      backgroundColor: '#6c5ead',
      color: 'white',
      '&:hover': {
        backgroundColor: '#5a4db2', // slightly darker on hover
      },
    }}
  >
    Create Task
  </Button>


          {/* Profile Button */}
          <Button color="#6c5ead" onClick={() => navigate('/profile')} sx={{
      backgroundColor: '#6c5ead',
      color: 'white',
      '&:hover': {
        backgroundColor: '#5a4db2', // slightly darker on hover
      },
    }}>
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
