import styled from 'styled-components';

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
  const buttonColor = theme[color].main;

  if (outline) {
    return `
      border-color: ${buttonColor};
      color: ${buttonColor};
    `;
  }

  const textColor = theme[color].text;

  return `
    background: ${buttonColor};
    border-color: ${buttonColor};
    color: ${textColor};
  `;
}

const handleHoverColor = ({ color, outline, theme }) => {
  if (outline) {
    const buttonColor = theme[color].main;
    const textColor = theme[color].text;

    return `
      background: ${buttonColor};
      color: ${textColor};
    `;
  }

  const buttonColor = theme[color].dark;

  return `
    background: ${buttonColor};
    border-color: ${buttonColor};
  `;
}

const handleDisabledColor = ({ color, outline, theme }) => {
  const buttonColor = theme[color].light;

  if (outline) {
    return `
      background: none;
      border-color: ${buttonColor};
      color: ${buttonColor};
    `;
  }

  const textColor = theme[color].text;

  return `
    background: ${buttonColor};
    border-color: ${buttonColor};
    color: ${textColor};
  `;
}
