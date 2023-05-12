import type { FC } from "react";

export interface TextInterface {
  t: string;
}
export const Text: FC<TextInterface> = ({ t }) => (
  <span className="ima text">{t}</span>
);
