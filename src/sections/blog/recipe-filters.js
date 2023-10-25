import PropTypes from "prop-types";
import { useCallback } from "react";

import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";


export default function RecipeFilters({
  open,
  onOpen,
  onClose,
  //
  filters,
  onFilters,
  //
  canReset,
  onResetFilters,
  //
  difficultyOptions,
}) {

  const handleFilterDifficulty = useCallback(
    (newValue) => {
      const checked = filters.difficulty.includes(newValue)
        ? filters.difficulty.filter((value) => value !== newValue)
        : [...filters.difficulty, newValue];
      onFilters("difficulty", checked);
    },
    [filters.difficulty, onFilters]
  );

  const renderHead = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ py: 2, pr: 1, pl: 2.5 }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Filters
      </Typography>

      <Tooltip title="Reset">
        <IconButton onClick={onResetFilters}>
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="solar:restart-bold" />
          </Badge>
        </IconButton>
      </Tooltip>

      <IconButton onClick={onClose}>
        <Iconify icon="mingcute:close-line" />
      </IconButton>
    </Stack>
  );

  const renderDifficulty = (
    <Stack>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        Difficulty
      </Typography>
      {difficultyOptions.map((option) => (
        <FormControlLabel
          key={option.value}
          control={
            <Checkbox
              checked={filters.difficulty.includes(option.label)}
              onClick={() => handleFilterDifficulty(option.label)}
            />
          }
          label={option.label}
        />
      ))}
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={
          <Badge color="error" variant="dot" invisible={!canReset}>
            <Iconify icon="ic:round-filter-list" />
          </Badge>
        }
        onClick={onOpen}
      >
        Filters
      </Button>

      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 280 },
        }}
      >
        {renderHead}

        <Divider />

        <Scrollbar sx={{ px: 2.5, py: 3 }}>
          <Stack spacing={3}>{renderDifficulty}</Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

RecipeFilters.propTypes = {
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  canReset: PropTypes.bool,
  filters: PropTypes.object,
  onFilters: PropTypes.func,
  difficultyOptions: PropTypes.array,
  onResetFilters: PropTypes.func,
  ratingOptions: PropTypes.array,
  categoryOptions: PropTypes.array,
  colorOptions: PropTypes.arrayOf(PropTypes.string),
};


