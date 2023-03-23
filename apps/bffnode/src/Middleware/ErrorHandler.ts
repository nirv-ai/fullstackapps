// @see https://expressjs.com/en/guide/error-handling.html

import { NirvError } from "@nirvai-web/data";
import type { Request, Response, NextFunction, Application } from "express";
import { Errors } from "@nirvai-web/data";

/**
 * all routes should call next(error) to skip directly to this error handler
 * @param app
 */
export const errorHandler = (app: Application) => {
  app.use(
    (error: NirvError, req: Request, res: Response, next: NextFunction) => {
      if (res.headersSent) return next(error);
      let useError: unknown = "";

      if (error.nirvai) {
        req.log.error({ error, useParams: req.useParams });
        useError = error;
      }
      // @ts-expect-error from json web token
      if (error?.inner?.name === "JsonWebTokenError") {
        req.log.error({ error, useParams: req.useParams });
        useError = Errors.AuthRequiredError();
      } else if (error.name === "QueryResultError") {
        req.log.error({
          msg: `unhandled pg-promise error: ${error.message}`,
          // @ts-expect-error
          query: error.query,
        });
        useError = Errors.InvalidRequestError();
      } else if (error.name === "UnauthorizedError") {
        useError = Errors.AuthRequiredError();
        // @ts-expect-error likely Key ... already exists
      } else if (error?.messageDetail?.endsWith("already exists.")) {
        useError = Errors.InvalidRequestError();
      } else {
        req.log.error({
          msg: "TODO: got unknown error",
          error: JSON.stringify(error),
          useParams: req.useParams,
        });
      }
      const { statusCode, message } =
        useError instanceof NirvError
          ? useError
          : Errors.MyBadContactSupportError();

      return res.status(statusCode).json({ message, statusCode });
    }
  );
};
