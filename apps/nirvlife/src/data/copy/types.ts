import type { SetRequired } from "type-fest";

export interface CopyInterface {
  copy: string;
  longform?: string[];
}
export type CopyCtas = CopyInterface[];

export interface CopyRefInterface
  extends SetRequired<CopyInterface, "longform"> {
  link: string;
}

export type CopyRefs = CopyRefInterface[];

export type CopyCtaStacks = [CopyInterface, CopyRefInterface][];
