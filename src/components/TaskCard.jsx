// src/components/TaskCard.js
import { Card, CardContent, Typography } from '@mui/material';

export default function TaskCard({ task }) {
  if (!task) return null;

  return (
    <Card
      sx={{
        width: 250,
        height: 180,
        mb: 2,
        borderRadius: 3,
        backgroundColor: '#ffffff', // white card inside pastel columns
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h6" gutterBottom textAlign="center">
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
