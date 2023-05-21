import type { SetRequired } from "type-fest";
import type { FC } from "react";

// TODO(noah): move these types to library
// ^ Library depends on this type
export interface CopyInterface {
  copy: string | string[];
  longform?: string[];
  url?: string;
}
export interface CopyRefInterface
  extends SetRequired<CopyInterface, "longform" | "url"> {}
export type CopyRefs = CopyRefInterface[];
export interface CopyLinkInterface
  extends SetRequired<Pick<CopyInterface, "copy" | "url">, "copy"> {}

export interface CopyCtaReveal extends CopyInterface {
  reveal: FC;
}
export type CopyCta =
  | CopyInterface
  | CopyCtaReveal
  | CopyRefInterface
  | CopyLinkInterface;
export type CopyCtas = CopyCta[];
export type CopyCtaStacks = [CopyInterface, CopyRefInterface][];

/**
 * @see https://color.a11y.com/ContrastPair/?bgcolor=e5a50a&fgcolor=000000
 *
 */
export interface CopyImg {
  color: string;
  bg?: string;
}
export type CopyImgDefaults = {
  bg: "rba(0,0,0,0)";
};

export interface EmployeeInterface extends CopyInterface {}
export type Team = EmployeeInterface[];
export type TeamJoin = (CopyLinkInterface | CopyCtaReveal)[];
