import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// _mock
import { _mock } from 'src/_mock';
//
import getVariant from '../get-variant';

// ----------------------------------------------------------------------

export default function ContainerView({ selectVariant, ...other }) {
  const isKenburns = selectVariant.includes('kenburns');

  return (
    <Paper
      sx={{
        height: 480,
        width: '100%',
        overflow: 'hidden',
        boxShadow: (theme) => theme.customShadows.z8,
      }}
      {...other}
    >
      {isKenburns ? (
        <Box
          component={m.img}
          src={_mock.image.cover(7)}
          {...getVariant(selectVariant)}
          sx={{ width: 1, height: 1, objectFit: 'cover' }}
        />
      ) : (
        <Box component={m.div} {...getVariant(selectVariant)} sx={{ height: 1, width: 1 }} />
      )}
    </Paper>
  );
}

ContainerView.propTypes = {
  selectVariant: PropTypes.array,
};
