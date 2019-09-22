import styled from 'styled-components';

export const Label = styled.label`
  ${props => handleColor(props)}
  font-family: sans-serif;
  font-size: 16px;
  letter-spacing: .3px;
  padding-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 300;
`;

const handleColor = ({ error, theme }) => {
  if (error) return `color: ${theme.alert.main}`;
  return `color: ${theme.onBackgroud}`;
}
