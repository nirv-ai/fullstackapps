import type { FC } from "react";

export interface LinkToInterface {
  url: string;
}

export const LinkTo: FC<LinkToInterface> = ({ url }) => (
  <div>ima link to {url}</div>
);
