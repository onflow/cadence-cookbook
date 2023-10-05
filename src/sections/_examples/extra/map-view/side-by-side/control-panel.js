import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// components
import { StyledControlPanel } from 'src/components/map';

// ----------------------------------------------------------------------

function ControlPanel({ mode, onModeChange }) {
  return (
    <StyledControlPanel>
      <ToggleButtonGroup color="primary" value={mode} exclusive onChange={onModeChange}>
        <ToggleButton value="side-by-side">Side by side</ToggleButton>

        <ToggleButton value="split-screen">Split screen</ToggleButton>
      </ToggleButtonGroup>
    </StyledControlPanel>
  );
}

ControlPanel.propTypes = {
  mode: PropTypes.string,
  onModeChange: PropTypes.func,
};

export default memo(ControlPanel);
