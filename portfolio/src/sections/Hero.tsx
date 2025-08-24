import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import { Download, Mail } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const theme = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'YourName_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, ${theme.palette.primary.light}15 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${theme.palette.secondary.light}15 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${theme.palette.primary.main}10 0%, transparent 50%)
          `,
          animation: 'float 20s ease-in-out infinite',
        },
        '@keyframes float': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '33%': {
            transform: 'translateY(-20px) rotate(120deg)',
          },
          '66%': {
            transform: 'translateY(20px) rotate(240deg)',
          },
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
            minHeight: '80vh',
          }}
        >
          {/* Left Content */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              textAlign: { xs: 'center', lg: 'left' },
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 2,
                background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              }}
            >
              Hi, I'm Your Name
            </Typography>
            
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                color: 'text.primary',
                fontWeight: 600,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
              }}
            >
              Full Stack Developer
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                maxWidth: 500,
                mx: { xs: 'auto', lg: 0 },
              }}
            >
              I create beautiful, responsive, and user-friendly web applications 
              that solve real-world problems. Passionate about clean code and 
              exceptional user experiences.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: { xs: 'center', lg: 'flex-start' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                onClick={downloadCV}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #2563eb, #1d4ed8)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1d4ed8, #1e40af)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Download CV
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                startIcon={<Mail />}
                onClick={scrollToContact}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Box>

          {/* Right Profile Image */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', lg: 'flex-end' },
              alignItems: 'center',
            }}
          >
            <Box
              component={motion.div}
              whileHover={{ 
                scale: 1.05,
                y: -10,
              }}
              transition={{ duration: 0.3 }}
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: -20,
                  bottom: -20,
                  background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                  borderRadius: '50%',
                  zIndex: -1,
                  opacity: 0.1,
                  animation: 'pulse 2s ease-in-out infinite',
                },
                '@keyframes pulse': {
                  '0%, 100%': {
                    transform: 'scale(1)',
                    opacity: 0.1,
                  },
                  '50%': {
                    transform: 'scale(1.1)',
                    opacity: 0.2,
                  },
                },
              }}
            >
              <Box
                component="img"
                src="/img/banner-one.jpg"
                alt="Hero Banner"
                sx={{
                  width: { xs: 250, sm: 300, md: 400, lg: 450 },
                  height: { xs: 250, sm: 300, md: 400, lg: 450 },
                  borderRadius: '50%',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  border: `4px solid ${theme.palette.background.paper}`,
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
