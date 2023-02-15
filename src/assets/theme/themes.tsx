import moonIcon from "../images/icon-moon.svg";
import sunIcon from "../images/icon-sun.svg";

export const lightTheme = {
  bgColor: "#F6F8FF",
  containerColor: "#FEFEFE",
  themeText: "#697C9A",
  themeIcon: moonIcon,
  titleColor: "#222731",
};

export const darkTheme = {
  bgColor: "#141D2F",
  containerColor: "#1E2A47",
  themeText: "#FFFFFF",
  themeIcon: sunIcon,
  titleColor: "#FFFFFF",
};

export const getTheme = (): boolean => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme !== null) {
    const theme = JSON.parse(localTheme).isLightTheme;
    console.log("theme is", theme);
    return theme;
  } else {
    return true;
  }
};
