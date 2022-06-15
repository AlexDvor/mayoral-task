import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: -30px;
  margin-left: -30px;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  /* flex-basis: calc(100% / 1 - 30px);
  margin-top: 30px;
  margin-left: 30px; */
  outline: 1px solid #0172ea;
  width: 425px;
  padding: 25px;
`;

export const WrapperImg = styled.div``;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Price = styled.p``;
export const DiscountPrice = styled.p``;
export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AddButton = styled.button`
  font-size: 14px;
  height: 46px;
  width: 100px;
  border: none;
  border-radius: 3px;
  background-color: #0172ea;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ColorButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
