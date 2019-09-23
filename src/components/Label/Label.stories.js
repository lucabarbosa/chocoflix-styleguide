import React from 'react';
import Label from './Label';

export default {
  title: 'Design System|Label',
  component: Label
};

export const withText = () => <Label>What's your name?</Label>;
export const withOptional = () => <Label optional>Tip your address</Label>;
export const withCustomMessage = () => <Label customMessage="blue or green">What's your favorite color?</Label>;
