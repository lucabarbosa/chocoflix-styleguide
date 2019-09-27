import styled from 'styled-components';

export const Breadcrumb = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  & > li {
    margin: auto 6px;

    &:not(:last-child):after {
      content: '/';
      margin-left: 12px;
    }
  }
`;
