import styled from 'styled-components';

export const PasswordInputContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

export const ToggleHiddenPasswordButton = styled.button`
  background: none;
  border: 0;
  color: ${({theme}) => theme.dark.main};
  cursor: pointer;
  font-size: 18px;
  outline: none;

  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  :hover {
    color: ${({theme}) => theme.dark.dark};
  }

`;
