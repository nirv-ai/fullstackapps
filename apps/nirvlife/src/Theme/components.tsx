import type { CSSProperties } from "react";
import type { LinkProps, ThemeOptions } from "@mui/material";

import { LinkBehavior } from "./LinkBehavior";
import { styleOverrides } from "./styleOverrides";
export type ComponentsInterface = ThemeOptions["components"] & {
  htmlFontSize: number;
};
// @see https://mui.com/material-ui/customization/theme-components/
export const components = ({ htmlFontSize }: ComponentsInterface) => ({
  MuiCssBaseline: { styleOverrides: styleOverrides({ htmlFontSize }) },
  MuiLink: {
    styleOverrides: {
      // change CSS for the root component
      // check dev console: look for MuiComponentName-Root
      // make it easy: set a className | id on the component
      // ^ then check for props.classes | props.id
      root: (props: unknown) => {
        if (typeof window === "undefined") return void 0;
        const useProps = props as Record<string, string | number>;

        const onPath = window.location.pathname === useProps.href;
        // @see https://css-tricks.com/almanac/properties/p/pointer-events/
        const pointerEvents = onPath ? "none" : "inherit";
        const cursor = onPath ? "not-allowed" : undefined;
        const fontStyle = onPath ? "italic" : undefined;
        return {
          pointerEvents,
          cursor,
          fontStyle,
        } as CSSProperties;
      },
    },
    defaultProps: {
      component: LinkBehavior,
    } as LinkProps,
  },
  MuiButtonBase: {
    defaultProps: {
      LinkComponent: LinkBehavior,
    },
  },
});
