import type {
  CopyCtaReveal,
  CopyLinkInterface,
  EmployeeInterface,
  Team,
  TeamJoin,
} from ".";

import { linkNirv } from ".";
import { Form } from "Library";

export const me: EmployeeInterface = {
  copy: [
    "founder. failure. success story.",
    "YC Startup School, IBM Global Entrepreneur. Application Architect",
  ],
};

export const advisor1: EmployeeInterface = {
  copy: ["world traveler. entrepreneur. olympic medalist", "Business"],
};

export const joinTeamAdvisor: CopyLinkInterface = {
  copy: ["intellectual. futurist. dope AF"],
  url: linkNirv.corpLinkedin.url,
};
export const joinTeamBiz: CopyLinkInterface = {
  copy: ["co founder: phd sociocultural/economic anthropology"],
  url: linkNirv.corpLinkedin.url, // this should be notion
};
export const joinTeamDevs: CopyLinkInterface = {
  copy: [
    "co founder: phd ai/ml. OWML in NLP",
    "co founder: phd data science. data engineering and data science",
    "co founder: blockchain. signficant contribution to web3 community",
  ],
  url: linkNirv.github.url, // this should be notion
};
export const joinTeamPreview: CopyCtaReveal = {
  copy: ["Do you live a busy lifestyle?", "We want to hear from you"],
  reveal: Form,
};
export const team: Team = [me, advisor1];
export const teamJoin: TeamJoin = [
  joinTeamAdvisor,
  joinTeamBiz,
  joinTeamDevs,
  joinTeamPreview,
];
