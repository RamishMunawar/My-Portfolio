import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Project } from '../types';
import SectionHeading from '../components/SectionHeading';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration with Stripe. The platform supports multiple payment methods, inventory management, and admin dashboard for store owners.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux', 'Express', 'JWT'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates using Socket.io, drag-and-drop functionality, and team collaboration features. Includes project boards, task assignments, progress tracking, and real-time notifications.',
    image: '/project2.jpg',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API with location-based services. Features include 7-day forecasts, hourly predictions, and interactive charts.',
    image: '/project3.jpg',
    technologies: ['React', 'TypeScript', 'OpenWeatherMap API', 'CSS Grid', 'Chart.js', 'Geolocation'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern technologies, featuring smooth animations and a clean design. Includes dark/light theme toggle, smooth scrolling, and optimized performance.',
    image: '/project4.jpg',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Framer Motion', 'Vite', 'CSS-in-JS'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://portfolio-demo.com',
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A content management system for blogs with markdown support, user roles, and SEO optimization features. Includes rich text editor, comment system, and analytics dashboard.',
    image: '/project5.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Markdown'],
    githubUrl: 'https://github.com/yourusername/blog-platform',
    liveUrl: 'https://blog-platform-demo.com',
  },
  {
    id: '6',
    title: 'Chat Application',
    description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities. Features include user authentication, message encryption, and push notifications.',
    image: '/project6.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3', 'JWT', 'WebRTC'],
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://chat-app-demo.com',
  },
  {
    id: '7',
    title: 'Recipe Finder',
    description: 'A recipe discovery application that helps users find recipes based on available ingredients. Features include ingredient search, nutritional information, and meal planning.',
    image: '/project7.jpg',
    technologies: ['React', 'TypeScript', 'Spoonacular API', 'Redux Toolkit', 'CSS Modules'],
    githubUrl: 'https://github.com/yourusername/recipe-finder',
    liveUrl: 'https://recipe-finder-demo.com',
  },
  {
    id: '8',
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking application with workout logging, progress charts, and goal setting. Includes exercise library, custom workout plans, and social features.',
    image: '/project8.jpg',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Charts.js', 'Push Notifications'],
    githubUrl: 'https://github.com/yourusername/fitness-tracker',
    liveUrl: 'https://fitness-tracker-demo.com',
  },
];

const ProjectsPage: React.FC = () => {


  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="My Projects"
          subtitle="Explore my portfolio of web applications, mobile apps, and development projects"
          align="center"
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {projects.map((project, index) => (
            <Card
              key={project.id}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: 'cover',
                }}
              />
              
              <CardContent
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  {project.title}
                </Typography>
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 3,
                    flex: 1,
                    lineHeight: 1.6,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Technologies */}
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    mb: 3,
                  }}
                >
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.light',
                        color: 'primary.contrastText',
                        fontSize: '0.75rem',
                      }}
                    />
                  ))}
                </Box>

                {/* Action Buttons */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 'auto',
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<GitHub />}
                    component="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      flex: 1,
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.dark',
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                      },
                    }}
                  >
                    GitHub
                  </Button>
                  
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<Launch />}
                    component="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      flex: 1,
                      background: 'linear-gradient(45deg, #2563eb, #1d4ed8)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #1d4ed8, #1e40af)',
                      },
                    }}
                  >
                    Live Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsPage;
