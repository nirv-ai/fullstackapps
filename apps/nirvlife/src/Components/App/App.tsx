import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { AppHeader, AppFooter } from "Components";
import { APP_KEY } from "data/constants";
import { AppTheme } from "Theme";

export const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline key="baseline" />
      <AppHeader key="header" />
      <Container disableGutters id="app-container" key="container">
        <Outlet />
      </Container>
      <AppFooter />
      <ScrollRestoration key="scroll" />
    </ThemeProvider>
  );
};
