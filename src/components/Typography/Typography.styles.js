import styled from 'styled-components';

export const Title = {
  H1: styled.h1`
    color: ${({theme}) => theme.onBackground};
    font-size: 54px;
    font-weight: 700;
  `,
  H2: styled.h2`
    color: ${({theme}) => theme.onBackground};
    font-size: 48px;
    font-weight: 700;
  `,
  H3: styled.h3`
    color: ${({theme}) => theme.onBackground};
    font-size: 36px;
    font-weight: 700;
  `,
  H4: styled.h4`
    color: ${({theme}) => theme.onBackground};
    font-size: 24px;
    font-weight: 700;
  `
}

export const Text = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: 1.5;
  ${props => handleColor(props)}
  ${props => handleDelete(props)}
  ${props => handleDisabled(props)}
  ${props => handleStrong(props)}
  ${props => handleUnderline(props)}
`;

const handleColor = ({ color, theme }) => {
  const textColor = theme[color] ? theme[color].main : theme.onBackground;
  return `color: ${textColor};`;
}

const handleUnderline = ({ underline }) => {
  if (underline) return 'text-decoration: underline;';
}

const handleStrong = ({ strong }) => {
  if (strong) return 'font-weight: 600;';
}

const handleDelete = ({ del }) => {
  if (del) return 'text-decoration: line-through;';
}

const handleDisabled = ({ disabled }) => {
  if (disabled) return 'cursor: disabled;';
}
