
import { setOptions } from "@storybook/addon-options";
import { configure, addDecorator } from "@storybook/react";
import themeDecorator from './theme-decorator';

setOptions({
  addonPanelInRight: true,
  name: "Chocoflix UI Kit",
});

const req = require.context("../src", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator(themeDecorator);

configure(loadStories, module);
