import { Component } from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { AppHeader } from "Components";
import { APP_KEY } from "../../data/constants";
import { AppTheme } from "Theme";

export type AppProps = object;
export class App extends Component<AppProps, Record<string, unknown>> {
  componentDidUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<Record<string, unknown>>,
    snapshot?: unknown
  ): void {
    console.info(`${APP_KEY} updated`);
  }

  render() {
    return (
      <ThemeProvider theme={AppTheme}>
        <CssBaseline key="baseline" />
        <AppHeader key="header" />
        <Container
          disableGutters // using padding isntead
          id="app-container"
          key="container"
        >
          <Outlet />
        </Container>
        <ScrollRestoration key="scroll" />
      </ThemeProvider>
    );
  }
}
