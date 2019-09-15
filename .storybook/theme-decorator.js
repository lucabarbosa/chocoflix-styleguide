import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../src/theme';

export default storyFn => (
  <ThemeProvider theme={Theme}>
    {storyFn()}
  </ThemeProvider>
);
