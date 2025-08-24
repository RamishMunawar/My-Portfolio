import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { router } from './router';
import { ThemeContextProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </React.StrictMode>,
);
