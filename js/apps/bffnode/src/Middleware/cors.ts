// @see https://expressjs.com/en/resources/middleware/cors.html

import cors from "cors";
import type { Express } from "express";

import { Errors } from "@nirvai-web/data";

const whitelist = ["http://localhost:8080", "https://localhost:8080"];
const corsOptions = {
  credentials: true,
  optionsSuccessStatus: 200,
  origin: function (origin, callback) {
    if (!origin) callback(null, true);
    else if (whitelist.some((x) => origin.startsWith(x))) callback(null, true);
    else callback(Errors.ActionNotAllowedError());
  },
};

export type AddCorsMiddleware = (app: Express) => void;
export const addCorsMiddleware: AddCorsMiddleware = (app) => {
  app.use(cors(corsOptions));
};
