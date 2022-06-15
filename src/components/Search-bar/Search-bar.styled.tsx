import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

export const Wrapper = styled.div`
  width: 250px;
  margin: 10px auto 10px auto;

  @media screen and (min-width: 768px) {
    margin: 10px auto 10px 0px;
  }

  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

export const WrapperInput = styled.div`
  position: relative;
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;
export const Input = styled.input`
  height: 40px;
  width: 100%;
  padding: 10px 10px 10px 35px;
  border-radius: 5px;
  border: 2px solid #aba8a8;
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 30%;
  left: 0px;
  margin-left: 10px;
  color: #aba8a8;
`;
