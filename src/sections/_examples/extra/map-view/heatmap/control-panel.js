import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// utils
import { fDate } from 'src/utils/format-time';
// components
import { StyledControlPanel } from 'src/components/map';

// ----------------------------------------------------------------------

function ControlPanel({
  startTime,
  endTime,
  allDays,
  selectedTime,
  onChangeTime,
  onChangeAllDays,
}) {
  const day = 24 * 60 * 60 * 1000;

  const days = Math.round((endTime - startTime) / day);

  const selectedDay = Math.round((selectedTime - startTime) / day);

  const handleChangeDays = (value) => {
    const daysToAdd = value;

    const newTime = startTime + daysToAdd * day;

    onChangeTime(newTime);
  };

  return (
    <StyledControlPanel>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'common.white' }}>
          All Days
        </Typography>

        <Switch
          size="small"
          checked={allDays}
          onChange={(event) => onChangeAllDays(event.target.checked)}
        />
      </Box>

      <br />

      <Typography
        gutterBottom
        variant="body2"
        sx={{ color: allDays ? 'text.disabled' : 'common.white' }}
      >
        Each Day: {fDate(selectedTime)}
      </Typography>

      <Slider
        min={1}
        step={1}
        max={days}
        disabled={allDays}
        value={selectedDay}
        onChange={(event, newValue) => {
          if (typeof newValue === 'number') handleChangeDays(newValue);
        }}
      />
    </StyledControlPanel>
  );
}

ControlPanel.propTypes = {
  allDays: PropTypes.bool,
  endTime: PropTypes.number,
  onChangeAllDays: PropTypes.func,
  onChangeTime: PropTypes.func,
  selectedTime: PropTypes.number,
  startTime: PropTypes.number,
};

export default memo(ControlPanel);
