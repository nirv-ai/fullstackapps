import { forwardRef } from "react";
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Box } from "@mui/material";

/**
 * FYI: you can also just do <AnyMuiComponent component={NavLink} />
 * @see https://mui.com/material-ui/guides/routing/
 * use as import { Link, Button } from '@mui/material, <LinkOrButton href="poop">click me</LinkOrButton>
 */
export const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return (
    <Box
      sx={{
        typography: "button",
        textDecoration: "none",
        flex: 1,
        display: "flex",
      }}
    >
      <RouterLink
        style={{
          textDecoration: "none",
          flex: 1,
        }}
        preventScrollReset
        ref={ref}
        to={href}
        {...other}
      />
    </Box>
  );
});
