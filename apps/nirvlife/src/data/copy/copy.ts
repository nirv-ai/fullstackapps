import type {
  CopyCtas,
  CopyInterface,
  CopyRefInterface,
  CopyRefs,
  CopyCtaStacks,
} from "./types";

export const nirvana: CopyInterface = {
  copy: "NIRV-an-a whole lotta guts",
};
export const goDoSucceed: CopyInterface = {
  copy: "go. do. succeed.",
};
export const vision: CopyInterface = {
  copy: "the platform for life",
};
export const mission: CopyInterface = {
  copy: "applicable intelligence",
};
export const purpose: CopyInterface = {
  copy: "open world application. for the real world",
};

export const ref1: CopyRefInterface = {
  copy: "effective decision making must be connected, contextual and continuous",
  longform: [],
  link: `https://www.gartner.com/smarterwithgartner/how-to-make-better-business-decisions`,
};
export const ref2: CopyRefInterface = {
  copy: "great decisions are shaped by consideration of many different viewpoints",
  longform: [],
  link: "https://hbr.org/2022/03/how-to-make-great-decisions-quickly",
};
export const ref3: CopyRefInterface = {
  copy: "from decision to action, and social representation",
  longform: [],
  link: "https://www.jstor.org/stable/2635240",
};
export const ref4: CopyRefInterface = {
  copy: "open world machine learning",
  longform: [],
  link: "https://arxiv.org/abs/2105.13448",
};

export const ctas: CopyCtas = [goDoSucceed, nirvana, vision, mission, purpose];
export const refs: CopyRefs = [ref1, ref2, ref3, ref4];
export const ctaStacks: CopyCtaStacks = [
  [goDoSucceed, ref1],
  [vision, ref3],
  [mission, ref2],
  [purpose, ref4],
];
