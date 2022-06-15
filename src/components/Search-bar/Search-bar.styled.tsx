import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

export const Wrapper = styled.div`
  position: relative;
`;
export const Input = styled.input`
  height: 40px;
  width: 300px;
  padding: 10px 10px 10px 35px;
  border-radius: 5px;
  border: 2px solid #aba8a8;
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 30%;
  left: 0px;
  margin-left: 10px;
  color: #aba8a8;
`;
