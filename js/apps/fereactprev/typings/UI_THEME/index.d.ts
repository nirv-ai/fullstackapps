import type { TypographyOptions } from "@mui/material/styles/createTypography";
import type { CSSProperties } from "react";
import type { Theme, Palette, PaletteOptions } from "@mui/material/styles";

// create new theme variables
// import { useTheme } from '@mui/material/styles';
// theme = useThem(); theme.poop
declare module "@mui/material/styles" {
  interface Theme {
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
      pageGap: string;
      huge: string;
      biggest: string;
      bigger: string;
      big: string;
      normal: string;
      small: string;
      smaller: string;
      smallest: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    sleepTime?: {
      major?: number;
      normal?: number;
      minor?: number;
    };
    widths?: {
      input?: string;
      rowHeight?: string;
      rowHeightHalf?: string;
      huge?: string;
      biggest?: string;
      bigger?: string;
      big?: string;
      normal?: string;
      small?: string;
      smaller?: string;
      smallest?: string;
    };
    fontSizes?: {
      huge?: string;
      biggest?: string;
      bigger?: string;
      big?: string;
      normal?: string;
      small?: string;
      smaller?: string;
      smallest?: string;
    };
    spaces?: {
      pageGap?: string;
      huge?: string;
      biggest?: string;
      bigger?: string;
      big?: string;
      normal?: string;
      small?: string;
      smaller?: string;
      smallest?: string;
    };
  }
}

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
