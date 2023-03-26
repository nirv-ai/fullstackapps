/**
 * some useful links
 * https://bareynol.github.io/mui-theme-creator/
 * https://blog.logrocket.com/15-ways-implement-vertical-alignment-css/
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 * https://css-tricks.com/snippets/css/complete-guide-grid/
 * https://m2.material.io/inline-tools/color/
 * https://mui.com/material-ui/customization/default-theme/
 * https://mui.com/material-ui/customization/how-to-customize/
 * https://mui.com/material-ui/customization/spacing
 * https://mui.com/material-ui/guides/typescript
 * https://www.icwebdesign.co.uk/common-viewport-sizes
 * https://www.sitepoint.com/understanding-and-using-rem-units-in-css/
 */

import { createTheme, responsiveFontSizes } from "@mui/material";

import { typography } from "./typography";
import { palette } from "./palette";
import { breakpoints } from "./breakpoints";
import { getVars } from "./vars";
import { components } from "./components";

const htmlFontSize = 32;
// skipped transitions
// @see https://blog.typekit.com/2016/08/17/flexible-typography-with-css-locks/
const rangeTop = 35;
const rangeBottom = 34;
const range = rangeTop - rangeBottom;
const flexFactor = "21em";
const upperGate = `((100vw - ${flexFactor})/(${range}))`;
const maxLineHeight = 1.5;
const minLineHeight = 1.3;
const lineHeightFactor = maxLineHeight - minLineHeight;
const flexSize = `calc(${minLineHeight} + (${lineHeightFactor}) * ${upperGate})`;

/// <reference path="../../../packages/nirvai-web-types/node_modules/@mui/material" />
export const AppTheme = responsiveFontSizes(
  createTheme({
    // @ts-expect-error ignore
    components: components({ htmlFontSize }),
    breakpoints,
    typography: typography({ flexSize, maxLineHeight, minLineHeight }),
    palette,
    ...getVars({ flexSize }),
  })
);
