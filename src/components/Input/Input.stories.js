import React from 'react';
import Input from './Input';
import { storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { wInfo } from '../../utils/wInfo';

const stories = storiesOf('Components/Input', module);
stories.addDecorator(withKnobs);

stories.add(
  'Text',
  wInfo()(() => (
    <Input
      type="text"
      placeholder="teste"
    />
  ))
);
