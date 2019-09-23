import React, { useState } from 'react';
import PasswordInput from './PasswordInput';

export default {
  title: 'Design System|PasswordInput',
  component: PasswordInput
}

export const Enabled = () => {
  const [value, setValue] = useState('');
  const handleValue = e => setValue(e.target.value);

  return (
    <PasswordInput
      onChange={handleValue}
      value={value}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState('');
  const handleValue = e => setValue(e.target.value);

  return (
    <PasswordInput
      disabled
      onChange={handleValue}
      value={value}
    />
  );
};
