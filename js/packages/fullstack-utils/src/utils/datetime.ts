import { add } from "date-fns";

export const now = () => Date.now();
export const nowInSeconds = () => Math.floor(now() / 1000);
export const inOneDay = () => add(now(), { days: 1 }).getTime() / 1000;
export const isOld = (seconds: number) =>
  Number.isInteger(seconds) ? nowInSeconds() > seconds : true;
