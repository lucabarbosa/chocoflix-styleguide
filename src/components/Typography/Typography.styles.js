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

