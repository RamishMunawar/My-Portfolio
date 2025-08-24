import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  Code,
  Smartphone,
  Storage,
  Cloud,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Building modern, responsive web applications using the latest technologies like React, TypeScript, and Node.js. Focus on performance, accessibility, and user experience.',
    icon: 'Code',
  },
  {
    id: '2',
    title: 'Mobile Development',
    description: 'Creating cross-platform mobile applications using React Native and Flutter. Ensuring smooth performance and native-like user experience across all devices.',
    icon: 'Smartphone',
  },
  {
    id: '3',
    title: 'Backend Development',
    description: 'Developing robust and scalable backend services using Node.js, Python, and various databases. Implementing RESTful APIs and microservices architecture.',
    icon: 'Storage',
  },
  {
    id: '4',
    title: 'Cloud Solutions',
    description: 'Deploying and managing applications on cloud platforms like AWS, Azure, and Google Cloud. Implementing CI/CD pipelines and infrastructure as code.',
    icon: 'Cloud',
  },
];

const iconMap = {
  Code,
  Smartphone,
  Storage,
  Cloud,
};

const Services: React.FC = () => {


  return (
    <Box
      component="section"
      id="services"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
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
            Services I Offer
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
            I provide comprehensive development services to help bring your ideas 
            to life with cutting-edge technology and best practices.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <Card
                key={service.id}
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
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: 'primary.light',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      '& svg': {
                        fontSize: 40,
                        color: 'primary.contrastText',
                      },
                    }}
                  >
                    {IconComponent && <IconComponent />}
                  </Box>
                  
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
