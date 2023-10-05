import { forwardRef } from 'react';
import Link from 'next/link';

// ----------------------------------------------------------------------

const RouterLink = forwardRef(({ ...other }, ref) => <Link ref={ref} {...other} />);

export default RouterLink;
