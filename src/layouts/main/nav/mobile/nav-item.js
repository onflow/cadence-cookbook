import PropTypes from 'prop-types';
// @mui
import Link from '@mui/material/Link';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// routes
import { RouterLink } from 'src/routes/components';
// components
import Iconify from 'src/components/iconify';
//
import { ListItem } from './styles';

// ----------------------------------------------------------------------

export default function NavItem({ item, open, active, externalLink, ...other }) {
  const { title, path, icon, children } = item;

  const renderContent = (
    <ListItem active={active} {...other}>
      <ListItemIcon> {icon} </ListItemIcon>

      <ListItemText disableTypography primary={title} />

      {!!children && (
        <Iconify
          width={16}
          icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          sx={{ ml: 1 }}
        />
      )}
    </ListItem>
  );

  // External link
  if (externalLink) {
    return (
      <Link href={path} target="_blank" rel="noopener" underline="none">
        {renderContent}
      </Link>
    );
  }

  // Has child
  if (children) {
    return renderContent;
  }

  // Default
  return (
    <Link component={RouterLink} href={path} underline="none">
      {renderContent}
    </Link>
  );
}

NavItem.propTypes = {
  active: PropTypes.bool,
  externalLink: PropTypes.bool,
  item: PropTypes.object,
  open: PropTypes.bool,
};
