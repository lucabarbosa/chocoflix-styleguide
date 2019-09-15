import { withInfo } from '@storybook/addon-info';

export const wInfo = (text = '') => (
  withInfo({
    inline: true,
    source: true,
    styles: {},
    text,
  })
);
