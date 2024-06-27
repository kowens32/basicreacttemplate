// src/components/Dashboard.js

import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ padding: 2, backgroundColor: theme.palette.primary.main, color: '#fff' }}>
            <Typography variant="h4">Dashboard</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2, backgroundColor: theme.palette.widget1.main, color: '#fff' }}>
            <Typography variant="h6">Widget 1</Typography>
            <Typography>Content for widget 1</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2, backgroundColor: theme.palette.widget2.main, color: '#fff' }}>
            <Typography variant="h6">Widget 2</Typography>
            <Typography>Content for widget 2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2, backgroundColor: theme.palette.widget3.main, color: '#000' }}>
            <Typography variant="h6">Widget 3</Typography>
            <Typography>Content for widget 3</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
