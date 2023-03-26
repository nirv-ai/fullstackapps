import type { BreakpointsOptions } from "@mui/material";

// @see https://mui.com/material-ui/react-use-media-query/
// @see https://mui.com/material-ui/customization/breakpoints/
export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 550,
    md: 850,
    lg: 1250,
    xl: 2000,
  },
};

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
