import type { FC } from "react";

import type { CopyLinkInterface } from "data";

export interface LinkInterface extends CopyLinkInterface {
  //
  tab?: boolean;
  [x: string]: any;
}

export const LinkTo: FC<LinkInterface> = ({
  url,
  copy,

  //
  tab = false,
  ...props
}) => (
  <a href={url} target={(tab && "_blank") || "_self"} {...props}>
    {copy}
  </a>
);
