import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import { Box } from '@mui/material';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{mt : 4}}>
        <HeroSection />
      </Box>

      <Footer />
    </>
  );
}

export default App;