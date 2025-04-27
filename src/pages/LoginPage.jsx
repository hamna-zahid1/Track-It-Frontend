import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { 
  Box, 
  Button, 
  Container, 
  TextField, 
  Typography, 
  Paper 
} from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          TrackIt - Login
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Don't have an account? <Link to="/register">Register</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginPage;
