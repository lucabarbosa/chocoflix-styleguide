
import { setOptions } from "@storybook/addon-options";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { getPropDefs } from '@storybook/addon-docs/react';
import { DocsPage } from '@storybook/addon-docs/blocks';
import themeDecorator from './theme-decorator';

setOptions({ name: "Chocoflix UI Kit" });

addParameters({
  options: {
    docs: {
      inlineStories: true,
      getPropDefs,
    },
  },
  docs: DocsPage,
});

addDecorator(themeDecorator);

configure(require.context('../src', true, /\.stories\.js$/), module);
