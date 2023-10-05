import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
//
import Image from '../image';

// ----------------------------------------------------------------------

export default function SingleFilePreview({ imgUrl = '' }) {
  return (
    <Box
      sx={{
        p: 1,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        position: 'absolute',
      }}
    >
      <Image
        alt="file preview"
        src={imgUrl}
        sx={{
          width: 1,
          height: 1,
          borderRadius: 1,
        }}
      />
    </Box>
  );
}

SingleFilePreview.propTypes = {
  imgUrl: PropTypes.string,
};
