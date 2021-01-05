import { ConfigApp, ThemeColor } from '../config/ConfigApp';

const ThemeColorTextUtils = (themeColor: ThemeColor): string => {
  let themeColorActive;

  /* Asignando el color del tema */
  if (themeColor === 'primary') {
    themeColorActive = ConfigApp.textPrimary;
  } else if (themeColor === 'secondary') {
    themeColorActive = ConfigApp.textSecondary;
  } else if (themeColor === 'tertiary') {
    themeColorActive = ConfigApp.textTertiary;
  } else {
    themeColorActive = ConfigApp.textPrimary;
  }

  return themeColorActive;
};

const ThemeColorBackgroundUtils = (themeColor: ThemeColor): string => {
  let themeColorActive;

  /* Asignando el color del tema */
  if (themeColor === 'primary') {
    themeColorActive = ConfigApp.primaryColor;
  } else if (themeColor === 'secondary') {
    themeColorActive = ConfigApp.secondaryColor;
  } else if (themeColor === 'tertiary') {
    themeColorActive = ConfigApp.tertiaryColor;
  } else {
    themeColorActive = ConfigApp.primaryColor;
  }

  return themeColorActive;
};

export { ThemeColorTextUtils, ThemeColorBackgroundUtils };
