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

const RegisterPage = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      alert('Registration failed. Try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          TrackIt - Register
        </Typography>
        <Box component="form" onSubmit={handleRegister} sx={{ mt: 2 }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
          </Button>
        </Box>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
