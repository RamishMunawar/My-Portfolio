import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import { Download } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'Docker', level: 65, category: 'tools' },
  { name: 'AWS', level: 60, category: 'tools' },
  { name: 'Git', level: 85, category: 'tools' },
];

const About: React.FC = () => {
  const theme = useTheme();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'YourName_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getSkillColor = (category: Skill['category']) => {
    switch (category) {
      case 'frontend':
        return theme.palette.primary.main;
      case 'backend':
        return theme.palette.secondary.main;
      case 'tools':
        return theme.palette.success.main;
      default:
        return theme.palette.info.main;
    }
  };

  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Left: Image */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              order: { xs: 2, lg: 1 },
            }}
          >
            <Box
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
                  borderRadius: 3,
                  zIndex: -1,
                  opacity: 0.1,
                },
              }}
            >
              <Box
                component="img"
                src="/img/banner-one.jpg"
                alt="Your Name"
                sx={{
                  width: { xs: 250, sm: 300, md: 350 },
                  height: { xs: 250, sm: 300, md: 350 },
                  borderRadius: '50%',
                  border: `4px solid ${theme.palette.background.paper}`,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>

          {/* Right: Content */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              order: { xs: 1, lg: 2 },
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 3,
                background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              About Me
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: 'text.secondary',
                fontSize: '1.125rem',
                lineHeight: 1.7,
              }}
            >
              I'm a passionate Full Stack Developer with over 5 years of experience 
              in building modern web applications. I love turning complex problems 
              into simple, beautiful, and intuitive solutions.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                fontSize: '1.125rem',
                lineHeight: 1.7,
              }}
            >
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community.
            </Typography>

            {/* Skills */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Skills & Technologies
              </Typography>
              
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                  gap: 2,
                }}
              >
                {skills.map((skill) => (
                  <Box
                    key={skill.name}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: skills.indexOf(skill) * 0.1 }}
                    sx={{ mb: 2 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {skill.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    
                    <Box
                      sx={{
                        width: '100%',
                        height: 8,
                        backgroundColor: 'action.hover',
                        borderRadius: 4,
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <Box
                        component={motion.div}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skills.indexOf(skill) * 0.1 }}
                        sx={{
                          height: '100%',
                          backgroundColor: getSkillColor(skill.category),
                          borderRadius: 4,
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
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
                Read More
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
