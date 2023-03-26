import type {
  LoaderInterface,
  PlayerAuthJwt,
  AuthRequestInterface,
} from "@nirvai-web/types";
import { isOld } from "./datetime";

import { defaultLoaderParams } from "../Loaders";

export const fromUrl = (x = "") => x.replace(/-/g, " ").trim();
export const toUrl = (x = "") => x.replace(/\s/g, "-").trim();
export const toPretty = (x = "") => x.replace(/[^A-Za-z0-9]/g, " ").trim();

/**
 * @see LoaderInterface
 */
const parsableKeys = [
  "academia_name",
  "academia",
  "action_name",
  "action",
  "after",
  "callsign",
  "created_by",
  "discipline_name",
  "discipline",
  "graph",
  "incentive_name",
  "incentive",
  "limit",
  "name",
  "path_name",
  "pivotCol",
  "player_callsign",
  "skill_name",
  "skill",
  "strategy_name",
  "strategy",
  "useOptimalView",
];
export interface ParseParamsInterface extends LoaderInterface {}

export const parseParams = (
  params: Record<string, any> = {},
  // @ts-expect-error ignore
  auth?: PlayerAuthJwt = {}
): ParseParamsInterface => {
  const parsedData: ParseParamsInterface = {};
  parsableKeys.forEach((key) => {
    if (typeof params[key] !== "undefined") {
      const value = params[key];
      const newValue = !isNaN(value) // eliminate numbers before strings
        ? parseInt(value)
        : typeof value === "string"
        ? fromUrl(value)
        : undefined; // its not a number or string, dont use it
      if (typeof newValue !== "undefined") parsedData[key] = newValue;
      delete params[key]; // force use of our version
    }
  });

  if (auth.exp) auth.isExpired = isOld(parseInt(auth.exp));

  // force created by to the authenticated user
  parsedData.created_by = auth.callsign;

  return Object.assign({}, defaultLoaderParams, params, parsedData, { auth });
};

export const getOperatorAndSort = (after = defaultLoaderParams.after) =>
  after > 0 ? [">", "ASC"] : ["<", "DESC"];
