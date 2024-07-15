import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  PaletteMode,
  Stack,
 
} from "@mui/material";

import "./App.css";
import getLoginTheme from "./pages/auth/GetLoginTheme";
import ToggleColorMode from "./pages/auth/ToggleColorMode";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const getInitialMode = () => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode
      ? JSON.parse(savedMode)
      : prefersDarkMode
      ? "dark"
      : "light";
  };

  const [mode, setMode] = React.useState<PaletteMode>(getInitialMode);
  const LoginTheme = createTheme(getLoginTheme(mode));

  useEffect(() => {
    localStorage.setItem("themeMode", JSON.stringify(mode));
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LoginTheme}>
      <CssBaseline />
      <BrowserRouter>
        <div className="App">
          <Stack
            justifyContent="end"
            sx={{
              position: { xs: "static", sm: "fixed" },
              right: "50%",
              transform: { sm: "translateX(50%)" },
              top: "5px",
              width: "fit",
              p: { xs: 2, sm: 4 },
              zIndex: "10000",
            }}
          >
            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
          </Stack>

          <MainRouter />
        </div>{" "}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
