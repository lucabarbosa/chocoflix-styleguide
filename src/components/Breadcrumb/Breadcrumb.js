import React from 'react';
import { Breadcrumb as StyledBreadcrumb, BreadcrumbItem as StyledBreadcrumbItem } from './Breadcrumb.styles';

const Breadcrumb = ({ children, ...props }) => <StyledBreadcrumb {...props}>{children}</StyledBreadcrumb>;
Breadcrumb.Item = ({ children, ...props }) => <li {...props}>{children}</li>;

export default Breadcrumb;
