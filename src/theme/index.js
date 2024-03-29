"use client";

import PropTypes from "prop-types";
import merge from "lodash/merge";
import { useMemo } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import { useSettingsContext } from "src/components/settings";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";
import { customShadows } from "./custom-shadows";
import { componentsOverrides } from "./overrides";
import { presets } from "./options/presets";
import { contrast } from "./options/contrast";
import RTL from "./options/right-to-left";

export default function ThemeProvider({ children }) {
  const settings = useSettingsContext();

  const presetsOption = presets(settings.themeColorPresets);

  const contrastOption = contrast(
    settings.themeContrast === "bold",
    settings.themeMode,
  );

  const baseOption = useMemo(
    () => ({
      palette: palette("light"),
      shadows: shadows("light"),
      customShadows: customShadows("light"),
      typography,
      shape: { borderRadius: 8 },
    }),
    [],
  );

  const memoizedValue = useMemo(
    () =>
      merge(
        // Base
        baseOption,
        // Presets: remove if not in use
        presetsOption,
        // Contrast: remove if not in use
        contrastOption.theme,
      ),
    [baseOption, presetsOption, contrastOption.theme],
  );

  const theme = createTheme(memoizedValue);

  theme.components = merge(
    componentsOverrides(theme),
    contrastOption.components,
  );

  return (
    <MuiThemeProvider theme={theme}>
      <RTL themeDirection={settings.themeDirection}>
        <CssBaseline />
        {children}
      </RTL>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
