import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Typography, Container, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

const CreateTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('To Do');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(res.data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to load users');
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/tasks', {
        title,
        description,
        assignedTo,
        status
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      toast.success('Task created successfully!');
      navigate('/'); // Redirect back to Task Board
    } catch (error) {
      console.error('Error creating task', error);
      toast.error('Failed to create task');
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          
          {/* Page Title */}
          <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Create New Task
          </Typography>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              label="Title"
              fullWidth
              margin="normal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <TextField
              label="Description"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            {/* Assign User */}
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Assign To</InputLabel>
              <Select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
              >
                {users.map((user) => (
                  <MenuItem key={user._id} value={user._id}>
                    {user.username}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Task Status */}
            <FormControl fullWidth margin="normal" required>
              <InputLabel>Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </FormControl>

            {/* Create Button */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: 3, py: 1.5, fontWeight: 'bold', fontSize: '16px' }}
            >
              Create Task
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default CreateTask;
