import { Component } from "react";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { AppHeader } from "Components";

export type AppProps = object;
export class App extends Component<AppProps, Record<string, unknown>> {
  componentDidUpdate(
    prevProps: Readonly<AppProps>,
    prevState: Readonly<Record<string, unknown>>,
    snapshot?: unknown
  ): void {
    console.info("\n\n nirv ready");
  }

  render() {
    return (
      <>
        <CssBaseline />
        <AppHeader />
        <Container
          disableGutters // using padding isntead
          id="app-container"
        >
          <Outlet />
        </Container>
        {/* @see https://reactrouter.com/en/main/components/scroll-restoration */}
        <ScrollRestoration />
      </>
    );
  }
}
