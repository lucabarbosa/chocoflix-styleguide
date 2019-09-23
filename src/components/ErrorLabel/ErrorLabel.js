import React from 'react';
import { ErrorLabel as StyledErrorLabel } from './ErrorLabel.styles';

const ErrorLabel = ({ children, ...props }) => <StyledErrorLabel {...props}>{children}</StyledErrorLabel>;

export default ErrorLabel;
