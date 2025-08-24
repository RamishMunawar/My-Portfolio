import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'h2' | 'h3' | 'h4';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  variant = 'h2',
}) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{
        textAlign: align,
        mb: 6,
      }}
    >
      <Typography
        variant={variant}
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
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 600,
            mx: 'auto',
            fontSize: '1.125rem',
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeading;
