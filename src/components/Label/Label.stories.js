import React from 'react';
import Label from './Label';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { wInfo } from '../../utils/wInfo';

const stories = storiesOf('Components/Label', module);
stories.addDecorator(withKnobs);

stories.add(
  'Text',
  wInfo()(() => (
    <Label
      optional={boolean('Optional', false)}
      customMessage={text('Custom Message', '')}>
      {text('Label', 'Label')}
    </Label>
  ))
);
