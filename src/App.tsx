import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getDefaultData } from "./api/api";
import { lightTheme, darkTheme, getTheme } from "./assets/theme/themes";
import Header from "./components/Header";
import Search from "./components/Search";
import User from "./components/User";
import { GlobalStyle } from "./globalStyles";
import { UserType } from "./type/UserType";

function App() {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(getTheme);
  const [inputValue, setInputValue] = useState<string>("");
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getDefaultData(setUser, setError);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify({ isLightTheme }));
  }, [isLightTheme]);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppContainer>
        <Main>
          <Header
            isLightTheme={isLightTheme}
            setIsLightTheme={setIsLightTheme}
          />
          <Search
            inputValue={inputValue}
            setInputValue={setInputValue}
            setUser={setUser}
            error={error}
            setError={setError}
          />
          <User
            // inputValue={inputValue}
            user={user}
            //  error={error}
          />
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
  transition: background-color 1s;
`;

const Main = styled.div`
  width: 80%;
  max-width: 730px;
  min-width: 327px;
  height: 200px;
  margin: 0 auto;
`;
