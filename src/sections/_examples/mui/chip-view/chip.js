import PropTypes from 'prop-types';
// @mui
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
// _mock
import { _mock } from 'src/_mock';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function Chips({ variant = 'filled' }) {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const renderLabel = (text) => (
    <Typography variant="overline" component="div" sx={{ color: 'text.secondary', mb: 1 }}>
      {text}
    </Typography>
  );

  return (
    <Stack spacing={3}>
      <Stack
        spacing={1}
        flexWrap="wrap"
        component={Paper}
        variant="outlined"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 5, borderStyle: 'dashed' }}
      >
        <Chip
          variant={variant}
          label="Default deletable"
          avatar={<Avatar>M</Avatar>}
          onDelete={handleDelete}
        />

        <Chip variant={variant} clickable label="Default clickable" avatar={<Avatar>M</Avatar>} />

        <Chip
          variant={variant}
          label="Primary deletable"
          avatar={<Avatar alt="Natacha" src={_mock.image.avatar(1)} />}
          color="primary"
          onDelete={handleDelete}
        />

        <Chip
          variant={variant}
          clickable
          label="Primary clickable"
          avatar={<Avatar alt="Natacha" src={_mock.image.avatar(1)} />}
          color="primary"
        />

        <Chip
          variant={variant}
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Secondary deletable"
          onDelete={handleDelete}
          color="secondary"
        />

        <Chip
          variant={variant}
          clickable
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Secondary clickable"
          color="secondary"
        />

        <Chip
          variant={variant}
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Info deletable"
          onDelete={handleDelete}
          color="info"
        />

        <Chip
          variant={variant}
          clickable
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Info clickable"
          color="info"
        />

        <Chip
          variant={variant}
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Success deletable"
          onDelete={handleDelete}
          color="success"
        />

        <Chip
          variant={variant}
          clickable
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Success clickable"
          color="success"
        />

        <Chip
          variant={variant}
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Warning deletable"
          onDelete={handleDelete}
          color="warning"
        />

        <Chip
          variant={variant}
          clickable
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Warning clickable"
          color="warning"
        />

        <Chip
          variant={variant}
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Error deletable"
          onDelete={handleDelete}
          color="error"
        />

        <Chip
          clickable
          variant={variant}
          icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
          label="Error clickable"
          color="error"
        />
      </Stack>

      <div>
        {renderLabel('Custom icon')}

        <Stack
          spacing={1}
          flexWrap="wrap"
          component={Paper}
          variant="outlined"
          alignItems="center"
          justifyContent="center"
          sx={{ p: 5, borderStyle: 'dashed' }}
        >
          <Chip
            variant={variant}
            icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
            label="Custom icon"
            onDelete={handleDelete}
            deleteIcon={<Iconify width={24} icon="eva:checkmark-fill" />}
          />

          <Chip
            variant={variant}
            avatar={<Avatar>M</Avatar>}
            label="Custom icon"
            onDelete={handleDelete}
            deleteIcon={<Iconify width={24} icon="eva:checkmark-fill" />}
            color="info"
          />
        </Stack>
      </div>

      <div>
        {renderLabel('Disabled')}

        <Stack
          spacing={1}
          flexWrap="wrap"
          component={Paper}
          variant="outlined"
          alignItems="center"
          justifyContent="center"
          sx={{ p: 5, borderStyle: 'dashed' }}
        >
          <Chip
            disabled
            variant={variant}
            icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
            label="Disabled"
            onDelete={handleDelete}
          />

          <Chip
            disabled
            variant={variant}
            avatar={<Avatar>M</Avatar>}
            label="Disabled"
            onDelete={handleDelete}
            color="info"
          />
        </Stack>
      </div>

      <div>
        {renderLabel('Sizes')}

        <Stack
          spacing={1}
          flexWrap="wrap"
          component={Paper}
          variant="outlined"
          alignItems="center"
          justifyContent="center"
          sx={{ p: 5, borderStyle: 'dashed' }}
        >
          <Chip
            variant={variant}
            icon={<Iconify width={24} icon="eva:smiling-face-fill" />}
            label="Normal"
            onDelete={handleDelete}
            color="info"
          />

          <Chip
            variant={variant}
            size="small"
            avatar={<Avatar>M</Avatar>}
            label="Small"
            onDelete={handleDelete}
            color="info"
          />
        </Stack>
      </div>
    </Stack>
  );
}

Chips.propTypes = {
  variant: PropTypes.string,
};
