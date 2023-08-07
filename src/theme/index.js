import { ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
// #2e7d32
const CustomThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[800],
      },
    },
    typography: {
      fontFamily: ["Open-sans"],
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
