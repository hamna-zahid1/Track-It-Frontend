// src/pages/TaskBoard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import { useLocation } from 'react-router-dom';

const TaskBoardPage = () => {
  const location = useLocation();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (location.state?.newTask) {
      setTasks((prevTasks) => [...prevTasks, location.state.newTask]);
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <Typography variant="h4" fontWeight="bold" mb={4} mt={5} textAlign="center" color="#7d5ba6">
          Task Board
        </Typography>
      <Box display="flex" 
  justifyContent="center" 
  alignItems="flex-start"
      sx={{ padding: 4,  minHeight: '100vh', }}>


        <Grid container spacing={3}>
          {/* To Do Column */}
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 2, backgroundColor: '#f8e6a0', borderRadius: 3 }}>
              <Typography variant="h6" textAlign="center" mb={2} fontWeight="bold">
                To Do
              </Typography>
              {tasks
                .filter((t) => t.status === 'To Do')
                .map((task) => (
                    <Box key={task._id} display="flex" justifyContent="center" mb={2}>
                    <TaskCard task={task} />
                  </Box>
                ))}
            </Paper>
          </Grid>

          {/* In Progress Column */}
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 2, backgroundColor: '#c5dff8', borderRadius: 3 }}>
              <Typography variant="h6" textAlign="center" mb={2} fontWeight="bold">
                In Progress
              </Typography>
              {tasks
                .filter((t) => t.status === 'In Progress')
                .map((task) => (
                    <Box key={task._id} display="flex" justifyContent="center" mb={2}>
                    <TaskCard task={task} />
                  </Box>
                ))}
            </Paper>
          </Grid>

          {/* Done Column */}
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 2, backgroundColor: '#d4f8c5', borderRadius: 3 }}>
              <Typography variant="h6" textAlign="center" mb={2} fontWeight="bold">
                Done
              </Typography>
              {tasks
                .filter((t) => t.status === 'Done')
                .map((task) => (
                    <Box key={task._id} display="flex" justifyContent="center" mb={2}>
                    <TaskCard task={task} />
                  </Box>
                ))}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TaskBoardPage;
