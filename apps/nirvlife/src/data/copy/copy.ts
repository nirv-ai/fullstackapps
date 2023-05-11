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

export const goDoSucceedRef: CopyRefInterface = {
  copy: "effective decision making must be connected, contextual and continuous",
  longform: [
    "Too many decisions rely on the status quo",
    "When [shit] changes, can you keep up?",
    "reframing whats essential, rethink what to improve",
    "Some decisions should be left to humans, others to machines",
  ],
  link: `https://www.gartner.com/smarterwithgartner/how-to-make-better-business-decisions`,
};
export const missionRef: CopyRefInterface = {
  copy: "great decisions are shaped by consideration of many different viewpoints",
  longform: [
    "Find your position as a leader",
    "Take control",
    "Bring everyone up to a consistent level of understanding",
    "Better decisions. Faster",
  ],
  link: "https://hbr.org/2022/03/how-to-make-great-decisions-quickly",
};
export const visionRef: CopyRefInterface = {
  copy: "from decision to action; social representation perspective",
  longform: [
    "The decisions we make become our realities",
    "Make choices that solve problems",
    "Challenge accepted norms of rationality",
    "Take an `Action` perspective",
  ],
  link: "https://www.jstor.org/stable/2635240",
};
export const purposeRef: CopyRefInterface = {
  copy: "open world machine learning",
  longform: ["abc", "abc", "abc", "abc"],
  link: "https://arxiv.org/abs/2105.13448",
};

export const ctas: CopyCtas = [goDoSucceed, nirvana, vision, mission, purpose];
export const refs: CopyRefs = [
  goDoSucceedRef,
  missionRef,
  visionRef,
  purposeRef,
];
export const ctaStacks: CopyCtaStacks = [
  [goDoSucceed, goDoSucceedRef],
  [vision, visionRef],
  [mission, missionRef],
  [purpose, purposeRef],
];
