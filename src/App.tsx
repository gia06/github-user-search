import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, getTheme } from "./assets/theme/themes";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(getTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify({ isLightTheme }));
  }, [isLightTheme]);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <AppContainer>
        <Main>
          <Header
            isLightTheme={isLightTheme}
            setIsLightTheme={setIsLightTheme}
          />
          <Search />
        </Main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.bgColor};
`;

const Main = styled.div`
  width: 80%;
  max-width: 730px;
  min-width: 327px;
  height: 200px;
  margin: 0 auto;
`;
