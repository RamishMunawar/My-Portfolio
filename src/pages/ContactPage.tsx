import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  useTheme,
  Alert,
  Snackbar,
  Paper,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Send,
  Phone,
  LocationOn,
  AccessTime,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { ContactForm as ContactFormType } from '../types';
import SectionHeading from '../components/SectionHeading';

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

const ContactPage: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<ContactFormType>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormType>>({});

  const handleInputChange = (field: keyof ContactFormType) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormType> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always interested in hearing about new opportunities and exciting projects. Let's work together!"
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
          {/* Contact Form */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h4"
              component="h3"
              sx={{
                mb: 3,
                fontWeight: 600,
              }}
            >
              Send Me a Message
            </Typography>
            
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <TextField
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={handleInputChange('name')}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
              
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                value={formData.email}
                onChange={handleInputChange('email')}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
              
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={5}
                value={formData.message}
                onChange={handleInputChange('message')}
                error={!!errors.message}
                helperText={errors.message}
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
              
              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<Send />}
                disabled={loading}
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #2563eb, #1d4ed8)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #1d4ed8, #1e40af)',
                    transform: 'translateY(-2px)',
                  },
                  '&:disabled': {
                    background: 'action.disabledBackground',
                    transform: 'none',
                  },
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Box>

          {/* Contact Info & Social Links */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Let's Connect
              </Typography>
              
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  mb: 3,
                  fontSize: '1.125rem',
                  lineHeight: 1.7,
                }}
              >
                I'm available for freelance work, full-time positions, and 
                interesting collaborations. Feel free to reach out through 
                any of these channels.
              </Typography>
            </Box>

            {/* Contact Information */}
            <Paper
              elevation={2}
              sx={{
                p: 3,
                backgroundColor: 'background.paper',
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Contact Information
              </Typography>
              
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Email color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    your.email@example.com
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Phone color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LocationOn color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    San Francisco, CA (Remote Available)
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <AccessTime color="primary" />
                  <Typography variant="body2" color="text.secondary">
                    Available for new projects
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Social Links */}
            <Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Follow Me
              </Typography>
              
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
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
                        width: 56,
                        height: 56,
                        backgroundColor: 'background.paper',
                        border: `2px solid ${theme.palette.divider}`,
                        color: 'text.primary',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: social.color,
                          color: 'white',
                          borderColor: social.color,
                          transform: 'translateY(-4px)',
                          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    >
                      <IconComponent />
                    </IconButton>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Additional Information */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            What Happens Next?
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              sx={{ textAlign: 'center' }}
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
                  mx: 'auto',
                  mb: 2,
                  '& svg': {
                    fontSize: 40,
                    color: 'primary.contrastText',
                  },
                }}
              >
                <Email />
              </Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                1. Get in Touch
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Send me a message with details about your project, timeline, and requirements.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{ textAlign: 'center' }}
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
                  mx: 'auto',
                  mb: 2,
                  '& svg': {
                    fontSize: 40,
                    color: 'primary.contrastText',
                  },
                }}
              >
                <Phone />
              </Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                2. Let's Discuss
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We'll have a call to discuss your project in detail and plan the development approach.
              </Typography>
            </Box>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              sx={{ textAlign: 'center' }}
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
                  mx: 'auto',
                  mb: 2,
                  '& svg': {
                    fontSize: 40,
                    color: 'primary.contrastText',
                  },
                }}
              >
                <Send />
              </Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                3. Start Building
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Once we agree on the scope and timeline, I'll start building your project.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thank you! Your message has been sent successfully.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;
