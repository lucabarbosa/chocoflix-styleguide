import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { wInfo } from '../../utils/wInfo';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

stories.add(
  'PasswordInput',
  wInfo()(() => {
    const [value, setValue] = useState('');
    const handleValue = e => setValue(e.target.value);

    return (
      <PasswordInput
        disabled={boolean('Disabled', false)}
        onChange={handleValue}
        value={value}
      />
    );
  })
);
