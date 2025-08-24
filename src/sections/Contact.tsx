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
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Send,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { ContactForm as ContactFormType } from '../types';

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

const Contact: React.FC = () => {
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
    <Box
      component="section"
      id="contact"
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
            Get In Touch
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
            I'm always interested in hearing about new opportunities and 
            exciting projects. Let's work together!
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 6,
            alignItems: 'start',
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

            {/* Contact Info */}
            <Box>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                }}
              >
                Contact Information
              </Typography>
              
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  📧 your.email@example.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  📱 +1 (555) 123-4567
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  🌍 Available for remote work worldwide
                </Typography>
              </Box>
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

export default Contact;
