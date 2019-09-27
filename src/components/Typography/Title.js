import React from 'react';
import PropTypes from 'prop-types';
import { Title as StyledTitle } from './Typography.styles';

const Title = ({ level = 1, children = '', ...props }) => {
  switch (level) {
    case 1:
    default:
      return <StyledTitle.H1 {...props}>{children}</StyledTitle.H1>;
    case 2:
      return <StyledTitle.H2 {...props}>{children}</StyledTitle.H2>;
    case 3:
      return <StyledTitle.H3 {...props}>{children}</StyledTitle.H3>;
    case 4:
      return <StyledTitle.H4 {...props}>{children}</StyledTitle.H4>;
  }
};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4])
};

export default Title;
