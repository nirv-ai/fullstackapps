// @see https://github.com/helmetjs/helmet

import helmet from "helmet";
import type { Express } from "express";

const helmetOptions = {
  contentSecurityPolicy: {
    reportOnly: true,
  },
  crossOriginResourcePolicy: true,
};

export type AddHelmetMiddlewareType = (app: Express) => void;
export const addHelmetMiddleware: AddHelmetMiddlewareType = (app) => {
  app.use(helmet(helmetOptions));
};
