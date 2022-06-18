import { FC } from 'react';
import { Wrapper } from './Container.styled';

type ChildrenProps = {
  children: JSX.Element | JSX.Element[];
};

const Container: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Container;
