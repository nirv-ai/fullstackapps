import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { AppHeader } from "Components";
import { APP_KEY } from "data/constants";
import { AppTheme } from "Theme";

// <img src={"/img/logo_main.png"} className="App-logo" alt="logo" />

export const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline key="baseline" />
      <AppHeader key="header" />
      <Container disableGutters id="app-container" key="container">
        <Outlet />
      </Container>
      <ScrollRestoration key="scroll" />
    </ThemeProvider>
  );
};
