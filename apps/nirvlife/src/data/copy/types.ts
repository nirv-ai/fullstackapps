export interface CopyInterface {
  copy: string;
}
export type CopyCtas = CopyInterface[];

export interface CopyRefInterface extends CopyInterface {
  longform: string[];
  link: string;
}

export type CopyRefs = CopyRefInterface[];

export type CopyCtaStacks = [CopyInterface, CopyRefInterface][];
