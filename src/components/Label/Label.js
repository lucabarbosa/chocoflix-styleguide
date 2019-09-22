import React from 'react';
import PropTypes from 'prop-types';
import { Label as StyledLabel, Span } from './Label.styles';

const Label = ({ children, customMessage = '', optional = false, ...props }) => {
  return (
    <StyledLabel>
      { children }
      { customMessage && <Span> - {customMessage}</Span>}
      { optional && <Span> - Opcional</Span>}
    </StyledLabel>
  );
};

Label.propTypes = {
  customMessage: PropTypes.string,
  optional: PropTypes.bool
}

export default Label;
