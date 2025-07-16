import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ padding: 2 }}>
        <HeroSection />
      </Box>

      {/* other components */}
    </>
  );
}

export default App;