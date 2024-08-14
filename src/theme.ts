// src/theme.ts
import {DefaultTheme} from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0071dc', // Walmart blue
    accent: '#ffc220', // Walmart yellow
    background: '#f0f0f0',
    surface: '#ffffff',
  },
};
