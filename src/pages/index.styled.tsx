import styled from '@emotion/styled';

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;
