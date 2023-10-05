import PropTypes from 'prop-types';
import { m, AnimatePresence } from 'framer-motion';
// @mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Paper from '@mui/material/Paper';
import DialogActions from '@mui/material/DialogActions';
//
import getVariant from '../get-variant';

// ----------------------------------------------------------------------

export default function ContainerView({ open, onOpen, onClose, selectVariant, ...other }) {
  return (
    <>
      <Paper
        sx={{
          height: 480,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.neutral',
        }}
        {...other}
      >
        <Button variant="contained" onClick={onOpen}>
          Click Me!
        </Button>
      </Paper>

      <AnimatePresence>
        {open && (
          <Dialog
            fullWidth
            maxWidth="xs"
            open={open}
            onClose={onClose}
            PaperComponent={(props) => (
              <m.div {...getVariant(selectVariant)}>
                <Paper {...props}>{props.children}</Paper>
              </m.div>
            )}
          >
            <DialogTitle id="alert-dialog-title">{`Use Google's location service?`}</DialogTitle>

            <DialogContent>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContent>

            <DialogActions>
              <Button onClick={onClose}>Disagree</Button>
              <Button variant="contained" onClick={onClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}

ContainerView.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  open: PropTypes.bool,
  selectVariant: PropTypes.string,
  children: PropTypes.node,
};
