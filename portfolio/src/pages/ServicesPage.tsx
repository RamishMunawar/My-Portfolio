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
  Security,
  Speed,
  Brush,
  Support,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Service } from '../types';
import SectionHeading from '../components/SectionHeading';

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
  {
    id: '5',
    title: 'Security Implementation',
    description: 'Implementing security best practices including authentication, authorization, data encryption, and secure API development to protect your applications.',
    icon: 'Security',
  },
  {
    id: '6',
    title: 'Performance Optimization',
    description: 'Optimizing application performance through code splitting, lazy loading, caching strategies, and database query optimization.',
    icon: 'Speed',
  },
  {
    id: '7',
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces with focus on user experience, accessibility, and modern design principles.',
    icon: 'Brush',
  },
  {
    id: '8',
    title: 'Maintenance & Support',
    description: 'Providing ongoing maintenance, updates, and technical support to ensure your applications run smoothly and stay up-to-date.',
    icon: 'Support',
  },
];

const iconMap = {
  Code,
  Smartphone,
  Storage,
  Cloud,
  Security,
  Speed,
  Brush,
  Support,
};

const ServicesPage: React.FC = () => {


  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Services I Offer"
          subtitle="Comprehensive development services to help bring your ideas to life with cutting-edge technology and best practices"
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

        {/* Additional Information */}
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
            Why Choose Me?
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                🚀 Fast Delivery
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                I prioritize efficient development processes and timely delivery 
                without compromising on quality. Your project will be completed 
                on schedule.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                💬 Clear Communication
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                I maintain transparent communication throughout the project, 
                keeping you updated on progress and involving you in key decisions.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                🔧 Technical Excellence
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                I use industry best practices and modern technologies to ensure 
                your application is scalable, maintainable, and future-proof.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                🎯 User-Focused
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                Every application I build prioritizes user experience, ensuring 
                your users have an intuitive and enjoyable interaction with your product.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage;
