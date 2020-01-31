import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#0d2a55",
  secondary: "",
  tertiary: "",
};

export default function({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
