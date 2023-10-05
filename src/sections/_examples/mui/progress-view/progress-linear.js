import PropTypes from 'prop-types';
// @mui
import Masonry from '@mui/lab/Masonry';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
//
import ComponentBlock from '../../component-block';

// ----------------------------------------------------------------------

const COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];

// ----------------------------------------------------------------------

export default function ProgressLinear({ progress, buffer }) {
  const renderLabel = (text) => (
    <Typography variant="overline" component="div" sx={{ color: 'text.secondary', mb: 1 }}>
      {text}
    </Typography>
  );

  return (
    <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
      <div>
        {renderLabel('Indeterminate')}
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          {COLORS.map((color) => (
            <LinearProgress key={color} color={color} sx={{ mb: 2, width: 1 }} />
          ))}
        </ComponentBlock>
      </div>

      <div>
        {renderLabel('Determinate')}
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          {COLORS.map((color) => (
            <LinearProgress
              key={color}
              color={color}
              value={progress}
              variant="determinate"
              sx={{ mb: 2, width: 1 }}
            />
          ))}
        </ComponentBlock>
      </div>

      <div>
        {renderLabel('Buffer')}
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          {COLORS.map((color) => (
            <LinearProgress
              key={color}
              color={color}
              variant="buffer"
              value={progress}
              valueBuffer={buffer}
              sx={{ mb: 2, width: 1 }}
            />
          ))}
        </ComponentBlock>
      </div>

      <div>
        {renderLabel('Query')}
        <ComponentBlock sx={{ bgcolor: 'background.paper', borderRadius: 1.5 }}>
          {COLORS.map((color) => (
            <LinearProgress
              key={color}
              color={color}
              variant="query"
              value={progress}
              valueBuffer={buffer}
              sx={{ mb: 2, width: 1 }}
            />
          ))}
        </ComponentBlock>
      </div>
    </Masonry>
  );
}

ProgressLinear.propTypes = {
  buffer: PropTypes.number,
  progress: PropTypes.number,
};
