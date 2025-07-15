// src/contexts/ThemeContext.jsx
import { createContext, useMemo, useState } from 'react';
import { createTheme } from '@mui/material/styles';

// Default color tokens
const DEFAULT_COLORS = {
  primary: {
    100: '#d0d1d5',
    200: '#a1a4ab',
    300: '#727681',
    400: '#434957',
    500: '#141b2d',
    600: '#101624',
    700: '#0c101b',
    800: '#080b12',
    900: '#040509'
  },
   blueAccent: {
    500: '#3e68f2',
    600: '#3c5ec2',
    700: '#3e4396'
  },
  greenAccent: {
    500: '#4cceac',
    600: '#3be19d'
  },
  redAccent: {
    500: '#db4f4a',
    600: '#f44336'
  },
  grey: {
    100: '#e0e0e0',
    300: '#a0a0a0'
  }
};

export const tokens = (mode = 'dark') => {
  return DEFAULT_COLORS; // For now, use default colors regardless of mode
};

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return createTheme({
    palette: {
      mode: mode,
      primary: {
        main: colors.primary[500],
      },
    },
  });
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState('dark');
  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
  }), []);

  const theme = useMemo(() => themeSettings(mode), [mode]);
  return [theme, colorMode];
};