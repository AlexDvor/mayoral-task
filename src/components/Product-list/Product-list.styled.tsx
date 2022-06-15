import styled from '@emotion/styled';

const setDisplay = (props): string => {
  if (props.hasDiscount) {
    return 'none';
  }
  return 'block';
};

const setLineThrough = (props): string => {
  if (!props.hasDiscount) {
    return 'line-through';
  }
  return 'none';
};

export const Wrapper = styled.div`
  margin-top: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -20px;
  margin-left: -20px;
  padding: 0px;
`;

export const Item = styled.li`
  margin-top: 20px;
  margin-left: 20px;
  outline: 1px solid #0172ea;
  background-color: white;
  padding: 10px;
  flex-basis: calc(100% / 2 - 40px);
  border-radius: 1%;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 768px) {
    flex-basis: calc(100% / 3 - 60px);
  }
  @media screen and (min-width: 1024px) {
    flex-basis: calc(100% / 4 - 80px);
  }
`;

export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
  overflow: hidden;
  height: 15px;
`;

export const InfoPrice = styled.div`
  height: 75px;
`;

export const Price = styled.p`
  font-size: 14px;
  margin-top: 25px;
  text-decoration: ${setLineThrough};
`;

export const DiscountPrice = styled.p`
  font-size: 16px;
  margin-top: 15px;
  color: red;
  display: ${setDisplay};
`;

export const ColorButton = styled.button`
  font-size: 14px;
  margin-top: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const AddButton = styled.button`
  font-size: 14px;
  height: 35px;
  width: 100px;
  border: none;
  border-radius: 3px;
  background-color: #0172ea;
  color: #fff;
  text-transform: uppercase;
  margin-top: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #004997;
  }
`;
