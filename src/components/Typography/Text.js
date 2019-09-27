import React from 'react';
import PropTypes from 'prop-types';
import { Text as StyledText } from './Typography.styles';

const Text = ({ children, ...props }) => <StyledText {...props}>{children}</StyledText>;

Text.propTypes = {
  color: PropTypes.oneOf(['primary', 'danger', 'alert', 'success', 'light', 'dark']),
  del: PropTypes.bool,
  underline: PropTypes.bool,
  strong: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Text;
