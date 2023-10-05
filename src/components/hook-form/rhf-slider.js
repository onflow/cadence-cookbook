import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import FormHelperText from '@mui/material/FormHelperText';
import Slider from '@mui/material/Slider';

// ----------------------------------------------------------------------

export default function RHFSlider({ name, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Slider {...field} valueLabelDisplay="auto" {...other} />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </>
      )}
    />
  );
}

RHFSlider.propTypes = {
  helperText: PropTypes.string,
  name: PropTypes.string,
};
