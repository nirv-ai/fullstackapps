import type { CSSProperties } from "react";
import type {
  Theme as MuiTheme,
  SimplePaletteColorOptions,
} from "@mui/material";

// create new theme variables
// import { useTheme } from '@mui/material/styles';
// theme = useThem(); theme.poop

export interface Theme extends MuiTheme {
  sleepTime: {
    major: number;
    normal: number;
    minor: number;
  };
  widths: {
    input: string;
    rowHeight: string;
    rowHeightHalf: string;
    huge: string;
    biggest: string;
    bigger: string;
    big: string;
    normal: string;
    small: string;
    smaller: string;
    smallest: string;
  };
  fontSizes: {
    huge: string;
    biggest: string;
    bigger: string;
    big: string;
    normal: string;
    small: string;
    smaller: string;
    smallest: string;
  };
  spaces: {
    spacing: number;
    columnSpacing: number;
    rowSpacing: number;
    huge: string;
    biggest: string;
    bigger: string;
    big: string;
    normal: string;
    small: string;
    smaller: string;
    smallest: string;
  };
  palette: MuiTheme["palette"] & {
    dark: Required<SimplePaletteColorOptions>;
  };
}

// add new variants here and above
declare module "@mui/material/styles" {
  export interface TypographyVariants {
    indieFlower: CSSProperties;
    kellySlab: CSSProperties;
    nirvAi: CSSProperties;
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    indieFlower?: CSSProperties;
    kellySlab?: CSSProperties;
    nirvAi?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    halfSize: true;
    indieFlower: true;
    kellySlab: true;
    nirvAi: true;
  }
}
