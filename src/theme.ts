import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  colors: {
    blue: [
      '#e7f1ff',
      '#c7ddfe',
      '#a3c5fc',
      '#7aa8f9',
      '#5a8df7',
      '#4579f6',
      '#1F3A5F', // Primary navy color (index 6 - main shade)
      '#2c5bd9',
      '#1a2f4d',
      '#0f1e33',
    ],
  },
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    fontWeight: '600',
  },
  defaultRadius: 'md',
});

