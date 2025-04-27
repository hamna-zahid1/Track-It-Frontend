// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, Container, Paper, Button, Avatar } from '@mui/material';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (error) {
      console.error('Failed to fetch profile', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Paper elevation={4} sx={{ p: 5, textAlign: 'center', borderRadius: 4 }}>
          
          {/* Avatar */}
          <Avatar sx={{ bgcolor: 'primary.main', width: 80, height: 80, mx: 'auto', mb: 2 }}>
            {user.username ? user.username.charAt(0).toUpperCase() : ''}
          </Avatar>

          {/* Profile Title */}
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            {user.username}
          </Typography>

          {/* Email */}
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {user.email}
          </Typography>

          {/* Divider */}
          <Box sx={{ my: 3, borderBottom: '1px solid #ddd' }} />

          {/* Logout Button */}
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleLogout}
            sx={{ mt: 2, borderRadius: 2 }}
          >
            Logout
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default Profile;
