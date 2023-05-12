import type { EmployeeInterface, Team, CopyLinkInterface, TeamJoin } from ".";

import { linkNirv } from ".";

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
  url: linkNirv.startengine.url,
};

export const joinTeamBiz: CopyLinkInterface = {
  copy: ["co founder: phd sociocultural/economic anthropology"],
  url: linkNirv.startengine.url,
};
export const joinTeamDevs: CopyLinkInterface = {
  copy: ["co founder: phd ai/ml", "co founder: phd data science"],
  url: linkNirv.github.url,
};
export const team: Team = [me, advisor1];
export const teamJoin: TeamJoin = [joinTeamAdvisor, joinTeamBiz, joinTeamDevs];
