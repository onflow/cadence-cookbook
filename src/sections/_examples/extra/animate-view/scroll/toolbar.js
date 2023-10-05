import PropTypes from 'prop-types';
// @mui
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Toolbar({ onRefresh, ...other }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
      {...other}
    >
      <IconButton onClick={onRefresh}>
        <Iconify icon="eva:refresh-fill" />
      </IconButton>
    </Paper>
  );
}

Toolbar.propTypes = {
  onRefresh: PropTypes.func,
};
