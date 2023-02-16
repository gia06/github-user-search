import styled from "styled-components";
import { HeaderProps } from "../type/HeaderType";
import SunIcon from "../assets/svg/SunIcon";
import MoonIcon from "../assets/svg/MoonIcon";

const Header = ({ isLightTheme, setIsLightTheme }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Title>devfinder</Title>

      <ThemeContainer onClick={() => setIsLightTheme(!isLightTheme)}>
        <ThemeText>{isLightTheme ? "DARK" : "LIGHT"}</ThemeText>
        {isLightTheme ? <MoonIcon /> : <SunIcon />}
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

  @media (max-width: 375px) {
    margin-top: 31px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.titleColor};
  font-weight: ${({ theme }) => theme.boldWeight};
  font-size: 26px;
  line-height: 39px;
`;

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-position: right;
  cursor: pointer;

  :hover {
    p {
      color: ${({ theme }) => theme.themeHover};
    }

    svg {
      fill: ${({ theme }) => theme.themeHover};
    }
  }
`;

const ThemeText = styled.p`
  color: ${({ theme }) => theme.themeColor};
  font-weight: ${({ theme }) => theme.boldWeight};
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  padding-right: 10px;
`;
