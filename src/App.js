import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />

  
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Global styles reset */}
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
