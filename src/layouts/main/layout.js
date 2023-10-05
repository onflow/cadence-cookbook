'use client';

import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
// routes
import { usePathname } from 'src/routes/hooks';
//
import Footer from './footer';
import Header from './header';

// ----------------------------------------------------------------------

export default function MainLayout({ children }) {
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};
