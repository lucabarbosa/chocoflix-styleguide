import styled from 'styled-components';
import capitalize from '../../utils/capitalize';

export const Button = styled.button`
  background: none;
  border: 2px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1rem;
  padding: .3rem .7rem;
  ${props => handleColor(props)}

  :hover {
    transition: .3s;
    ${props => handleHoverColor(props)}
  }

  :disabled {
    cursor: not-allowed;
    ${props => handleDisabledColor(props)}
  }
`;

const handleColor = ({ color, outline, theme }) => {
  const buttonColor = theme[color][0];

  if (outline) {
    return `
      border-color: ${buttonColor};
      color: ${buttonColor};
    `;
  }

  const textColorName = `on${capitalize(color)}`;
  const textColor = theme[textColorName];

  return `
    background: ${buttonColor};
    border-color: ${buttonColor};
    color: ${textColor};
  `;
}

const handleHoverColor = ({ color, outline, theme }) => {
  if (outline) {
    const buttonColor = theme[color][0];
    const textColorName = `on${capitalize(color)}`;
    const textColor = theme[textColorName];

    return `
      background: ${buttonColor};
      color: ${textColor};
    `;
  }

  const buttonColor = theme[color][1];
  return `
    background: ${buttonColor};
    border-color: ${buttonColor};
  `;
}

const handleDisabledColor = ({ color, outline, theme }) => {
  const buttonColor = theme[color][2];

  if (outline) {
    return `
      background: none;
      border-color: ${buttonColor};
      color: ${buttonColor};
    `;
  }

  const textColorName = `on${capitalize(color)}`;
  const textColor = theme[textColorName];

  return `
    background: ${buttonColor};
    border-color: ${buttonColor};
    color: ${textColor};
  `;
}
