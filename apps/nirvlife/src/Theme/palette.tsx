// @see https://mui.com/material-ui/customization/palette/
// @see https://mui.com/material-ui/customization/color/
// @see https://m2.material.io/resources/color/#!/?view.left=0&view.right=0

import type { Theme } from "@mui/material/styles";

const primary = "#2f9ef9";
const secondary = "#eb1e0b";
const dark = "#141414";
// const grey = "#2e2e2e";
// #1d35e9
// --red-1: #ff4d50;
//   --yellow-1: #d7b428;
//   --green-1: #52bf5d;
//   --purple-1: #303197;
//   --grey-1: #333536;
export const palette: Theme["palette"] = {
  contrastThreshold: 2.9,
  tonalOffset: 0.1,
  mode: "light",
  // @ts-expect-error ignore

  primary: {
    main: primary,
    contrastText: dark,
  },
  // @ts-expect-error dunno
  secondary: {
    main: secondary,
    contrastText: dark,
  },
  dark: {
    main: dark,
    contrastText: primary,
    light: dark,
    dark: dark,
  },
  // grey: {
  // main: grey,
  //   contrastText: "#fff",
  //   light: grey,
  //   dark: grey,
  // },
};

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
    // grey: PaletteColorOptions;
  }
  interface PaletteOptions {
    dark: PaletteOptions["primary"];
    // grey: PaletteOptions["secondary"];
  }
}
