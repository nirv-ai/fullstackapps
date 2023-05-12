import type { SetRequired } from "type-fest";

export interface CopyInterface {
  copy: string | string[];
  longform?: string[];
}
export type CopyCtas = CopyInterface[];

export interface CopyRefInterface
  extends SetRequired<CopyInterface, "longform"> {
  link: string;
}

export type CopyRefs = CopyRefInterface[];

export type CopyCtaStacks = [CopyInterface, CopyRefInterface][];

export interface CopyLinkInterface extends CopyInterface {
  to: string;
}
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
