import { WrapperInput, Input, SearchIcon, Wrapper } from './Search-bar.styled';

const SearchBar = () => {
  return (
    <>
      <Wrapper>
        <WrapperInput>
          <Input type="search" placeholder="Buscar"></Input>
          <SearchIcon></SearchIcon>
        </WrapperInput>
      </Wrapper>
    </>
  );
};

export default SearchBar;
