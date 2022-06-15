import { Wrapper, Input, SearchIcon } from './Search-bar.styled';

const SearchBar = () => {
  return (
    <>
      <Wrapper>
        <Input type="search" placeholder="Buscar"></Input>
        <SearchIcon></SearchIcon>
      </Wrapper>
    </>
  );
};

export default SearchBar;
