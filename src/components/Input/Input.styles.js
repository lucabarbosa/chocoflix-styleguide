import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid ${({theme}) => theme.borderColor.default};
  border-radius: 5px;
  font-size: 16px;
  padding: 8px 10px;
  outline: 0;

  ::placeholder {
    color: ${({theme}) => theme.borderColor.default};
  }

  :focus {
    border-color: ${({theme}) => theme.borderColor.focus};
  }
`;
