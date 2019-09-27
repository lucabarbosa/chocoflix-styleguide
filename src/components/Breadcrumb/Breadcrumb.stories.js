import React from 'react';
import Breadcrumb from './Breadcrumb';

export default {
  title: 'Navigation|Breadcrumb',
  component: Breadcrumb
};

export const WithLinks = () => (
  <Breadcrumb>
    <Breadcrumb.Item><a href="#">Link 1</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Link 2</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Link 3</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Link 4</a></Breadcrumb.Item>
  </Breadcrumb>
);
