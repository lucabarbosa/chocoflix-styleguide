import React from 'react';
import Button from './Button';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { wInfo } from '../../utils/wInfo';

const stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);

stories.add(
  'Primary',
  wInfo()(() => (
    <Button
      color="primary"
      disabled={boolean('Disabled', false)}
      outline={boolean('Outline', false)}
    >
      {text('Label', 'Click Here!')}
    </Button>
  ))
);

stories.add(
  'Light',
  wInfo()(() => (
    <Button
      color="light"
      disabled={boolean('Disabled', false)}
      outline={boolean('Outline', false)}
    >
      {text('Label', 'Click Here!')}
    </Button>
  ))
);

stories.add(
  'Dark',
  wInfo()(() => (
    <Button
      color="dark"
      disabled={boolean('Disabled', false)}
      outline={boolean('Outline', false)}
    >
      {text('Label', 'Click Here!')}
    </Button>
  ))
);

stories.add(
  'Success',
  wInfo()(() => (
    <Button
      color="success"
      disabled={boolean('Disabled', false)}
      outline={boolean('Outline', false)}
    >
      {text('Label', 'Click Here!')}
    </Button>
  ))
);

stories.add(
  'Alert',
  wInfo()(() => (
    <Button
      color="alert"
      disabled={boolean('Disabled', false)}
      outline={boolean('Outline', false)}
    >
      {text('Label', 'Click Here!')}
    </Button>
  ))
);

stories.add(
  'Danger',
  wInfo()(() => (
    <Button
      color="danger"
      disabled={boolean('Disabled', false)}
      outline={boolean('Outline', false)}
    >
      {text('Label', 'Click Here!')}
    </Button>
  ))
);
