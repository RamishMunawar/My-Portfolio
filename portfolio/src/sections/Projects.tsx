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

const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://task-manager-demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API with location-based services.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=200&fit=crop',
    technologies: ['React', 'TypeScript', 'OpenWeatherMap API', 'CSS Grid', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.com',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern technologies, featuring smooth animations and a clean design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://portfolio-demo.com',
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A content management system for blogs with markdown support, user roles, and SEO optimization features.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/blog-platform',
    liveUrl: 'https://blog-platform-demo.com',
  },
  {
    id: '6',
    title: 'Chat Application',
    description: 'Real-time chat application with private messaging, group chats, and file sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3'],
    githubUrl: 'https://github.com/yourusername/chat-app',
    liveUrl: 'https://chat-app-demo.com',
  },
];

const Projects: React.FC = () => {


  return (
    <Box
      component="section"
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.125rem',
            }}
          >
            Here are some of the projects I've worked on. Each project represents 
            a unique challenge and learning experience.
          </Typography>
        </Box>

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

export default Projects;
