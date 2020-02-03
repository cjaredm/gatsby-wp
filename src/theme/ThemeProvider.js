import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styles from "./styles/index";


export default function({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

const FONT = {
  SIZE: {
    XSMALL: "0.5rem",
    SMALL: "0.75rem",
    NORMAL: "1rem",
    MEDIUM: "2.5rem",
    LARGE: "3.5rem",
    XLARGE: "4.5rem",
    XXLARGE: "5rem",
    XXXLARGE: "5.5rem",
    H5: "2.5rem",
    H4: "3rem",
    H3: "3.5rem",
    H2: "4rem",
    H1: "4.5rem",
  },
  WEIGHT: {
    normal: "400",
    light: "500",
    semibold: "600",
    bold: "700",
    bolder: "800",
  }
};

export const theme = {
  primary: "#df4937",
  secondary: "#d49625",
  tertiary: "#333333",
  black: "#4C4A44",
  white: "#FFFFFF",
  grey: "grey",
  error: "#EA595E",
  warning: "#F0BD2B",
  success: "#59EA9D",
  FONT,
  SPACING: {
    global: '20px',
  },
  radius: "5px",
};

const GlobalStyle = createGlobalStyle`
  ${styles}
`;
