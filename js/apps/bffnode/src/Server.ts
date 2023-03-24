// @see https://expressjs.com/en/advanced/best-practice-security.html#use-cookies-securely
import express, { type Express } from "express";
import https from "https";
import { readFile } from "fs-extra";

import {
  PlayersRouter,
  PathsRouter,
  ActionsRouter,
  SkillsRouter,
  AcademiaRouter,
  DisciplineRouter,
  IncentivesRouter,
} from "./Routers";
import { addMiddlewarePost, addMiddlewarePre } from "./Middleware";

const initApp = () => {
  const app: Express = express();
  app.disable("x-powered-by");

  addMiddlewarePre(app);

  // all router routes should throw and req.log({err, errMsg?})
  // ^ this will attach the error to the logs
  // ^ if no errMsg, the default err.message will be used
  app.use("/v1/skill", SkillsRouter);
  // shouldnt need this unless we get some bulk data to parse
  // app.use("/process", ProcessRouter);

  addMiddlewarePost(app);

  return app;
};

export const Server = async () => {
  const app = initApp();
  const port = process.env.WEB_BFF_PORT!;

  if (process.env.NODE_ENV !== "production")
    https
      .createServer(
        {
          key: await readFile("/etc/ssl/certs/dev.nirv.ai/privkey.pem"),
          cert: await readFile("/etc/ssl/certs/dev.nirv.ai/cert.pem"),
        },
        app
      )
      .listen(port, () => {
        console.info(
          `⚡️[server]: Server is running at shttp://0.0.0.0:${port}`
        );
      });
  else
    app.listen(port, () => {
      console.info(`⚡️[server]: Server is running at http://0.0.0.0:${port}`);
    });
};
