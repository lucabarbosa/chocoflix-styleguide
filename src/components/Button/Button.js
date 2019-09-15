import React from 'react';
import PropTypes from 'prop-types';
import { Button as StyledButton } from './Button.styles';

const Button = ({ children, ...props }) => <StyledButton {...props}>{ children }</StyledButton>;

Button.defaultProps = {
  color: 'primary',
  outline: false,
  type: 'button'
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'danger', 'alert', 'success', 'light', 'dark']),
  outline: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
