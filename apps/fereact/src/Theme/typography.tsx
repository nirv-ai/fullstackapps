import type { TypographyOptions } from "@mui/material/styles/createTypography";
import type { CSSProperties } from "react";

import Typography from "@mui/material/Typography"; // eslint-disable-line

// @see https://fontsource.org/fonts
// @see https://www.fontspace.com/category/logo
// @see https://fonts.google.com/variablefonts
// @see https://fonts.google.com/
import "@fontsource/indie-flower"; // stylish, fancy
import "@fontsource/kelly-slab"; // stylish, freaky
import "@fontsource/permanent-marker"; // stylish, likable
import "@fontsource/inconsolata"; // clean, text
import "@fontsource/rubik"; // clean, headings
import "@fontsource/baloo-2"; // clean, headings
import "@fontsource/shadows-into-light-two"; // handwriting
const resetStyles = {
  padding: 0,
  margin: 0,
  textDecoration: "none",
};
export interface TypographyInterface {
  flexSize: string;
  minLineHeight: number;
  maxLineHeight: number;
}
// @see https://mui.com/material-ui/customization/typography
// @see https://mui.com/material-ui/react-typography
// @see https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units
export const typography = ({
  minLineHeight,
  maxLineHeight,
  flexSize,
}: TypographyInterface): TypographyOptions => {
  // you can use <Box sx={{typography: 'h1'}}>....</Box>
  // to make a component into one of these
  return {
    htmlFontSize: 32,
    indieFlower: {
      ...resetStyles,
      fontFamily: "'Indie Flower', cursive",
      letterSpacing: "0.3rem",
    },
    kellySlab: {
      ...resetStyles,
      fontFamily: "'Kelly Slab', cursive",
      letterSpacing: "0.3rem",
    },
    nirvAi: {
      ...resetStyles,
      fontWeight: "bold",
      fontFamily: "'Permanent Marker', cursive",
      letterSpacing: "0.2rem",
    },
    h1: {
      ...resetStyles,
      fontSize: "2rem",
      fontWeight: "bold",
      fontFamily: "'Permanent Marker', cursive",
      letterSpacing: "0.2rem",
    },
    h2: {
      ...resetStyles,
      fontSize: "1.6rem",
      fontWeight: "bold",
      fontFamily: "'Rubik', sans-serif",
      letterSpacing: "0.2rem",
    },
    h3: {
      ...resetStyles,
      fontSize: "1.2rem",
      fontFamily: "'Rubik', sans-serif",
      fontWeight: "bold",
    },
    h4: {
      ...resetStyles,
      fontSize: "1rem",
      fontFamily: "'Rubik', sans-serif",
      fontWeight: "bold",
    },
    h5: {
      ...resetStyles,
      fontSize: "0.7rem",
      fontFamily: "'Rubik', sans-serif",
      fontWeight: "bold",
    },
    h6: {
      ...resetStyles,
      fontSize: "0.5rem",
      fontFamily: "'Rubik', sans-serif",
      fontWeight: "bold",
    },
    button: {
      ...resetStyles,
      fontSize: "0.6rem",
      fontWeight: "bold",
      fontFamily: "'Rubik', sans-serif",
      letterSpacing: "0.1rem",
    },
    subtitle1: {
      ...resetStyles,
      fontSize: "0.7rem",
      textTransform: "uppercase",
      fontFamily: "'Baloo 2', cursive",
    },
    subtitle2: {
      ...resetStyles,
      fontSize: "0.7rem",
      textTransform: "uppercase",
      fontFamily: "'Baloo 2', cursive",
    },
    body1: {
      ...resetStyles,
      fontSize: "1rem",
      fontFamily: "'Inconsolata', monospace",
    },
    body2: {
      ...resetStyles,
      fontSize: "1rem",
      fontFamily: "'Inconsolata', monospace",
    },
    caption: {
      ...resetStyles,
      fontSize: "1rem",
      fontFamily: "'Baloo 2', cursive",
    },
    overline: {
      ...resetStyles,
      fontSize: "1rem",
      fontFamily: "'Baloo 2', cursive",
    },

    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Frutiger",
      "Dejavu Sans",
      "sans-serif",
    ].join(","),
  };
};

// add new variants here and above
declare module "@mui/material/styles" {
  interface TypographyVariants {
    indieFlower: CSSProperties;
    kellySlab: CSSProperties;
    nirvAi: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    indieFlower?: CSSProperties;
    kellySlab?: CSSProperties;
    nirvAi?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    halfSize: true;
    indieFlower: true;
    kellySlab: true;
    nirvAi: true;
  }
}
