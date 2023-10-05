// @mui
//
import PropTypes from 'prop-types';
import { StyledPopup } from './styles';

// ----------------------------------------------------------------------

export default function MapPopup({ sx, children, ...other }) {
  return (
    <StyledPopup anchor="bottom" sx={sx} {...other}>
      {children}
    </StyledPopup>
  );
}

MapPopup.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
