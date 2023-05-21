import type {
  CopyCtas,
  CopyInterface,
  CopyCta,
  CopyRefInterface,
  CopyRefs,
  CopyCtaStacks,
} from "./types";

export const slogan: CopyInterface = {
  copy: "NIRV-an-a whole lotta guts",
};

const nirvUrl = "https://nirv.ai";
export const nirvai: CopyInterface = {
  copy: "NIRVai",
  url: nirvUrl,
};
export const nirvaiRef: CopyRefInterface = {
  copy: "everything we do requires NIRV",
  longform: [
    "NIRVai is a Lifestyle Management Platform",
    "From Busy Bees to Corporate Cs, we help you take control",
    "Managing projects or manifesting something new in your life.",
  ],
  url: nirvUrl,
};

export const tagline: CopyInterface = {
  copy: "go. do. succeed.",
};
export const taglineRef: CopyRefInterface = {
  copy: "effective decision making must be connected, contextual and continuous",
  longform: [
    "Too many decisions rely on the status quo",
    "When [shit] changes, can you keep up?",
    "reframing whats essential, rethink what to improve",
    "Some decisions should be left to humans, others to machines",
  ],
  url: `https://www.gartner.com/smarterwithgartner/how-to-make-better-business-decisions`,
};

export const mission: CopyInterface = {
  copy: "from artificial to applicable intelligence",
};
export const missionRef: CopyRefInterface = {
  copy: "great decisions are shaped by consideration of many different viewpoints",
  longform: [
    "Find your position as a leader",
    "Take control",
    "Bring everyone up to a consistent level of understanding",
    "Better decisions. Faster",
  ],
  url: "https://hbr.org/2022/03/how-to-make-great-decisions-quickly",
};

export const vision: CopyInterface = {
  copy: "the platform for life",
};
export const visionRef: CopyRefInterface = {
  copy: "from decision to action; social representation perspective",
  longform: [
    "The decisions we make become our realities",
    "Make choices that solve problems",
    "Challenge accepted norms of rationality",
    "Take an `Action` perspective",
  ],
  url: "https://www.jstor.org/stable/2635240",
};

export const purpose: CopyInterface = {
  copy: "open world application. for the real world",
};
export const purposeRef: CopyRefInterface = {
  copy: "open world machine learning is important in real world contexts",
  longform: [
    "in real-world scenarios, apps require interactivity and automation for dynamic environments",
    "open-world learning is a model that can learn new things not learned before",
    "identify the unknown, fill in the gaps between humans and machines",
    "designed data that changes rapidly",
  ],
  url: "https://arxiv.org/abs/2105.13448",
};

export const ctas: CopyCtas = [nirvai, vision, mission, purpose];
export const refs: CopyRefs = [taglineRef, missionRef, visionRef, purposeRef];
export const ctaStacks: CopyCtaStacks = [
  [tagline, taglineRef],
  [vision, visionRef],
  [mission, missionRef],
  [purpose, purposeRef],
  [nirvai, nirvaiRef],
];
