import type { Express, Request, Response, NextFunction } from "express";
import cookie from "cookie";

export type AddCookieParserMiddlewareType = (app: Express) => void;
export const addCookieParserMiddleware: AddCookieParserMiddlewareType = (
  app
) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    req.cookies = cookie.parse(req.headers.cookie ?? "");

    next();
  });
};
