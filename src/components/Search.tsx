import styled from "styled-components";
import { SearchProps } from "../type/SearchType";
import { useEffect } from "react";

function Search({ inputValue, setInputValue }: SearchProps) {
  useEffect(() => {}, []);

  const handleSubmit = (e: React.FormEvent) => {};

  return (
    <SearchContainer onSubmit={(e) => handleSubmit(e)}>
      <SearchInput
        autoComplete=""
        placeholder="Search GitHub username…"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        // onChange={(e) => console.log(e.currentTarget.value)}
      />

      <SearchButton type="submit" value="Search" />
    </SearchContainer>
  );
}

export default Search;

const SearchContainer = styled.form`
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

  @media (max-width: 375px) {
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

  ::placeholder {
    font-weight: ${({ theme }) => theme.regularWeight};
    font-size: 18px;
    line-height: 25px;
    color: ${({ theme }) => theme.placeHolderColor};
  }

  @media (max-width: 560px) {
    background-position: 9px;
    padding-left: 38px;
    font-size: 13px;

    ::placeholder {
      font-family: "Space Mono";
      font-weight: ${({ theme }) => theme.regularWeight};
      font-size: 13px;
      line-height: 25px;
    }
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
