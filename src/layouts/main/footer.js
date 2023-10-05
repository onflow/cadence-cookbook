import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { usePathname } from 'src/routes/hooks';
import Logo from 'src/components/logo';


// const LINKS = [
//   {
//     headline: 'Minimal',
//     children: [
//       { name: 'About us', href: paths.about },
//       { name: 'Contact us', href: paths.contact },
//       { name: 'FAQs', href: paths.faqs },
//     ],
//   },
//   {
//     headline: 'Legal',
//     children: [
//       { name: 'Terms and Condition', href: '#' },
//       { name: 'Privacy Policy', href: '#' },
//     ],
//   },
//   {
//     headline: 'Contact',
//     children: [{ name: 'support@minimals.cc', href: '#' }],
//   },
// ];


export default function Footer() {

  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Logo sx={{ mb: 1, mx: 'auto' }} />

        <Typography variant="caption" component="div">
          © All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  return simpleFooter;
}
