import styled from "styled-components";

function Search() {
  return (
    <SearchContainer>
      <SearchInput autoComplete="" placeholder="Search Github username..." />

      <SearchButton type="submit" value="Search" />
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 69px;
  background: ${({ theme }) => theme.containerColor};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin-top: 35px;
  padding: 7px;
  overflow: hidden;

  @media (min-width: 375px) {
    height: 60px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  background-image: url(${({ theme }) => theme.searchIcon});
  background-repeat: no-repeat;
  background-position: 32px;
  border-radius: inherit;
  outline-style: none;
  padding-left: 73px;
  color: ${({ theme }) => theme.inputColor};
  font-weight: ${({ theme }) => theme.boldWeight};
  font-size: 18px;
  line-height: 25px;

  @media (max-width: 375px) {
    background-position: 16px;
    padding-left: 50px;
    font-size: 13px;
  }

  ::placeholder {
    font-weight: ${({ theme }) => theme.regularWeight};
    font-size: 18px;
    line-height: 25px;
    color: ${({ theme }) => theme.placeHolderColor};
  }
`;

const SearchButton = styled.input`
  width: 40%;
  height: 100%;
  max-width: 106px;
  min-width: 84px;
  border-radius: 10px;
  background: ${({ theme }) => theme.buttonBackground};
  cursor: pointer;
  color: ${({ theme }) => theme.buttonColor};
  font-weight: ${({ theme }) => theme.boldWeight};
  font-size: 16px;
  line-height: 24px;

  :hover {
    background: ${({ theme }) => theme.buttonHover};
    font-size: 14px;
    line-height: 21px;
  }
`;
