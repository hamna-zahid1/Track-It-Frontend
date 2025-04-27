// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: 'linear-gradient(to bottom, #e9d8fd, #fbb6ce)', 
      // ultra light purple and pink gradient
    },
    primary: {
      main: '#e9d8fd', // very light purple
    },
    secondary: {
      main: '#fbb6ce', // very light pink
    },
  },
});

export default theme;
