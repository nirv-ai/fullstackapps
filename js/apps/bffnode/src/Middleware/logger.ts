import type { Express } from "express";
import type { IncomingMessage } from "http";
import createLogger, { type Options } from "pino-http";
import pino, { type Level } from "pino";
import { randomUUID } from "crypto";

const loggerOptions: Options = {
  logger: pino(),
  wrapSerializers: true, // else you get WAY too much stuff
  useLevel: "info" as Level,
  autoLogging: {
    ignore: (/*req*/) => false, // incase you want to SKIP logging for certain requests
  },
  genReqId: (req: IncomingMessage) => {
    if (req.id) return req.id;
    const xRequestId = req.id;
    if (xRequestId) return xRequestId;
    const id = randomUUID();
    return { "X-Request-Id": id };
  },
  // add custom props
  customProps: (/*req, res*/) => ({
    env: process.env.NODE_ENV,
  }),
  // import type { IncomingMessage, ServerResponse } from "http";
  // Define custom serializers
  serializers: {
    err: pino.stdSerializers.err,
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res,
  },
};

export type AddLoggerMiddlewareType = (app: Express) => void;
export const addLoggerMiddleware: AddLoggerMiddlewareType = (app) => {
  app.use(createLogger(loggerOptions));
};
