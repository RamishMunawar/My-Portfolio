import React from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const AboutPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better - my journey, skills, and what drives me"
          align="center"
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 6,
            alignItems: 'start',
            mb: 8,
          }}
        >
          {/* Profile Image */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
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
              <Avatar
                src="/profile.png"
                alt="Your Name"
                sx={{
                  width: { xs: 300, sm: 400, md: 450 },
                  height: { xs: 300, sm: 400, md: 450 },
                  border: `4px solid ${theme.palette.background.paper}`,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Box>
          </Box>

          {/* Content */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
              Full Stack Developer
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
              in building modern web applications. My journey in software development 
              began with a curiosity about how things work on the internet, and it 
              has evolved into a deep passion for creating meaningful digital experiences.
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
              I specialize in JavaScript/TypeScript ecosystems, with expertise in 
              React, Node.js, and modern web technologies. I believe in writing 
              clean, maintainable code and staying up-to-date with industry best practices.
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
              the developer community. I'm always eager to learn and grow.
            </Typography>
          </Box>
        </Box>

        {/* Extended Content */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ mt: 8 }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              mb: 4,
              textAlign: 'center',
              fontWeight: 600,
            }}
          >
            My Journey
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              >
                2023 - Present
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                Senior Full Stack Developer at Tech Company, leading development 
                of enterprise applications and mentoring junior developers.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              >
                2021 - 2023
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                Full Stack Developer at Startup, built scalable web applications 
                and implemented CI/CD pipelines.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              >
                2019 - 2021
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                Frontend Developer at Agency, created responsive websites and 
                optimized user experiences for various clients.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: 'primary.main',
                }}
              >
                2015 - 2019
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                Computer Science degree with focus on web technologies and 
                software engineering principles.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
