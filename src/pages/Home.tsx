import React from 'react';
import { Box } from '@mui/material';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Services from '../sections/Services';
import Contact from '../sections/Contact';

const Home: React.FC = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </Box>
  );
};

export default Home;
