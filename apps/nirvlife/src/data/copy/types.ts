import type { SetRequired } from "type-fest";

// TODO(noah): move these types to library
// ^ Library depends on this type
export interface CopyInterface {
  copy: string | string[];
  longform?: string[];
  url?: string;
}
export type CopyCtas = CopyInterface[];

export interface CopyRefInterface
  extends SetRequired<CopyInterface, "longform" | "url"> {}

export type CopyRefs = CopyRefInterface[];

export type CopyCtaStacks = [CopyInterface, CopyRefInterface][];

export interface CopyLinkInterface
  extends SetRequired<Pick<CopyInterface, "copy" | "url">, "url"> {}

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
