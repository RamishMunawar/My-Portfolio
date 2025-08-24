import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Fab,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub',
    icon: GitHub,
    url: 'https://github.com/yourusername',
    color: '#333',
  },
  {
    name: 'LinkedIn',
    icon: LinkedIn,
    url: 'https://linkedin.com/in/yourusername',
    color: '#0077b5',
  },
  {
    name: 'Email',
    icon: Email,
    url: 'mailto:your.email@example.com',
    color: '#ea4335',
  },
];

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 1,
            }}
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <IconButton
                  key={social.name}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{
                    color: 'text.secondary',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: social.color,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  <IconComponent />
                </IconButton>
              );
            })}
          </Box>
        </Box>
      </Container>

      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1000,
            }}
          >
            <Fab
              color="primary"
              aria-label="back to top"
              onClick={scrollToTop}
              sx={{
                boxShadow: 3,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 6,
                },
              }}
            >
              <KeyboardArrowUp />
            </Fab>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Footer;
