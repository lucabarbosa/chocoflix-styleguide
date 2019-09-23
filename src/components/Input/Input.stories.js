import React, { useState } from 'react';
import Input from './Input';

export default {
  title: 'Design System|Input',
  component: Input
}

export const Enabled = () => {
  const [value, setValue] = useState('');
  const handleValue = e => setValue(e.target.value);

  return (
    <Input
      placeholder="e.g. Palmeiras is the best Brazilian's team."
      onChange={handleValue}
      value={value}
    />
  );
};

export const Disabled = () => <Input placeholder="e.g. Palmeiras is the best Brazilian's team." disabled />;
