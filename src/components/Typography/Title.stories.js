import React from 'react';
import Title from './Title';

export default {
  title: 'Typography|Title',
  component: Title
};

export const H1 = () => <Title level={1}>This is an example headline.</Title>;
export const H2 = () => <Title level={2}>This is an example headline.</Title>;
export const H3 = () => <Title level={3}>This is an example headline.</Title>;
export const H4 = () => <Title level={4}>This is an example headline.</Title>;
