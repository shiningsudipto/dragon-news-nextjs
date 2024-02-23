import { Container, Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <Container className='mt-4'>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <p>Latest News</p>
        </Grid>
        <Grid xs={4}>
          <p>Top News</p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;