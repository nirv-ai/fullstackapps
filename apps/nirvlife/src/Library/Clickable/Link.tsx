import {
  useLink,
  useButton,
  type AriaLinkOptions,
  type AriaButtonProps,
} from "react-aria";
import { useMemo, useRef, type FC } from "react";
import classNames from "classnames";
import { Link, Button, type ButtonProps, type LinkProps } from "@mui/material";

import type { CopyLinkInterface } from "data";

export type LinkA = LinkProps & AriaLinkOptions;
export const LinkA: FC<LinkA> = (props) => {
  const ref = useRef(null);
  const { linkProps } = useLink(props, ref);

  return <Link {...props} />;
};

export type LinkButton = ButtonProps & AriaButtonProps;
export const LinkButton: FC<LinkButton> = (props) => {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);

  return <Button {...props} ref={ref} />;
};

export interface LinkInterface extends CopyLinkInterface {
  //
  classes?: string;
  EL?: keyof Pick<JSX.IntrinsicElements, "a" | "button">;
  linkProps?: AriaLinkOptions & AriaButtonProps & ButtonProps & LinkProps;
  [x: string]: any;
}
export const LinkTo: FC<LinkInterface> = ({
  copy,
  //
  classes,
  EL = "a",
  url = "#",
  linkProps = {},
  ...props
}) => {
  const baseProps = useMemo(
    () => ({
      className: classNames("link", classes),
      href: url,
      ...linkProps,
    }),
    [classes, linkProps]
  );

  return EL === "a" ? (
    <LinkA {...baseProps}>{copy}</LinkA>
  ) : (
    <LinkButton {...baseProps}>{copy}</LinkButton>
  );
};
