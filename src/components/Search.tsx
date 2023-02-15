import styled from "styled-components";

function Search() {
  return <SearchContainer></SearchContainer>;
}

export default Search;

const SearchContainer = styled.div`
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.containerColor};
  border-radius: 15px;
`;
