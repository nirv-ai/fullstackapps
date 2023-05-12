import type { FC } from "react";

import type { CopyInterface } from "data";

export interface TextInterface extends Pick<CopyInterface, "copy"> {
  //
  props?: Record<string, any>;
}
export const Text: FC<TextInterface> = ({ copy, props = {} }) => (
  <span className="ima text" {...props}>
    {copy}
  </span>
);
