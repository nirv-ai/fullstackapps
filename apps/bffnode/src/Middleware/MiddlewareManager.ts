import type { Express, Request, Response, NextFunction } from "express";

import { addBodyParserMiddleware } from "./bodyParser";
import { addCookieParserMiddleware } from "./cookieParser";
import { addHelmetMiddleware } from "./helmet";
import { addLoggerMiddleware } from "./logger";
import { addOpenApiMiddleware } from "./OpenApi";
import { jwtValidateMiddleware, addRemoveJwtMiddleware } from "./Jwt";
import methodOverride from "method-override";
import { errorHandler } from "./ErrorHandler";
import { addCorsMiddleware } from "./cors";

export const addMiddlewarePre = (app: Express): void => {
  // must come first
  addLoggerMiddleware(app);
  if (process.env.NODE_ENV !== "production") addCorsMiddleware(app);
  addCookieParserMiddleware(app);
  addBodyParserMiddleware(app);
  app.use(methodOverride());
  addHelmetMiddleware(app);

  // base middleware
  jwtValidateMiddleware(app);
  addOpenApiMiddleware(app);
};

// FYI: req.useParams are added within AsyncWrapper logic
// ^ it needs to be added there to have access to express route params
export const addMiddlewarePost = (app: Express): void => {
  ////////
  // PUT ALL OTHER HANDLERS ABOVE THIS LINE
  // DONT PUT ANY OTHER HANDLERS BELOW THIS LINE
  ////////
  app.use((req: Request, res: Response, next: NextFunction) => {
    // @see https://expressjs.com/en/api.html#req.get
    // will cause next handler to set JWT as bear token in authorization header
    if (req.get("nirvai")) {
      res.locals.api = true;
    }
    next();
  });
  addRemoveJwtMiddleware(app);
  errorHandler(app);
};
