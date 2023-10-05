//
import PropTypes from 'prop-types';
import Iconify from '../iconify';

// ----------------------------------------------------------------------

export function LeftIcon({ icon = 'eva:arrow-ios-forward-fill', isRTL }) {
  return (
    <Iconify
      icon={icon}
      sx={{
        transform: ' scaleX(-1)',
        ...(isRTL && {
          transform: ' scaleX(1)',
        }),
      }}
    />
  );
}

LeftIcon.propTypes = {
  icon: PropTypes.string,
  isRTL: PropTypes.bool,
};

export function RightIcon({ icon = 'eva:arrow-ios-forward-fill', isRTL }) {
  return (
    <Iconify
      icon={icon}
      sx={{
        ...(isRTL && {
          transform: ' scaleX(-1)',
        }),
      }}
    />
  );
}

RightIcon.propTypes = {
  icon: PropTypes.string,
  isRTL: PropTypes.bool,
};
