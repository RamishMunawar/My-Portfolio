import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);
