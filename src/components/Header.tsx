import styled from "styled-components";
import { HeaderProps } from "../type/HeaderType";

const Header = ({ isLightTheme, setIsLightTheme }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title>devfinder</Title>

      <ThemeContainer onClick={() => setIsLightTheme(!isLightTheme)}>
        <ThemeText>{isLightTheme ? "DARK" : "LIGHT"}</ThemeText>

        {/* <ThemeIcon /> */}
      </ThemeContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 144px;

  @media (max-width: 768px) {
    margin-top: 140px;
  }

  and (max-width: 375px) {
    margin-top: 31px;
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.titleColor};
`;

const ThemeContainer = styled.div`
  background-image: url(${(props) => props.theme.themeIcon});
  background-repeat: no-repeat;
  background-position: right;
  cursor: pointer;
`;

const ThemeText = styled.p`
  color: ${(props) => props.theme.themeText};
  padding-right: 30px;
`;

const ThemeIcon = styled.img``;
