import searchIcon from "../images/icon-search.svg";
import { ThemeType } from "../../type/ThemeType";

export const lightTheme: ThemeType = {
  bgColor: "#F6F8FF",
  containerColor: "#FEFEFE",
  themeColor: "#697C9A",
  titleColor: "#222731",
  boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
  searchIcon,
  themeHover: "#222731",
  inputColor: "#222731",
  boldWeight: "700",
  regularWeight: "400",
  buttonBackground: "#0079FF",
  buttonColor: "#FFFFFF",
  buttonHover: "#60ABFF",
  placeHolderColor: "#4B6A9B",
  loginColor: "#0079FF",
  errColor: "#F74646",
  bioColor: "#4B6A9B",
  numberColor: "#2B3442",
};

export const darkTheme: ThemeType = {
  bgColor: "#141D2F",
  containerColor: "#1E2A47",
  themeColor: "#FFFFFF",
  titleColor: "#FFFFFF",
  boxShadow: "",
  searchIcon,
  themeHover: "#90A4D4",
  inputColor: "#FFFFFF",
  boldWeight: "700",
  regularWeight: "400",
  buttonBackground: "#0079FF",
  buttonColor: "#FFFFFF",
  buttonHover: "#60ABFF",
  placeHolderColor: "#FFFFFF",
  loginColor: "#0079FF",
  errColor: "#F74646",
  bioColor: "#FFFFFF",
  numberColor: "#FFFFFF",
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
