import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { RouterLink } from 'src/routes/components';
import Image from '../image/image';


const FooterLogo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 120,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <Image src='/logo/flow_logo_footer.svg'/>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

FooterLogo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default FooterLogo;
